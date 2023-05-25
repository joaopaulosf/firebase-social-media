import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import heart from "../../images/heart.svg";
import heartfill from "../../images/heart-fill.svg";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { Props } from "../../config/interfaces";
import { Like } from "../../config/interfaces";

export const Post = (props: Props) => {
  const { post } = props;
  const [user] = useAuthState(auth);

  const [likes, setLikes] = useState<Like[] | null>(null);

  const likesRef = collection(db, "likes");

  const likesDoc = query(
    collection(db, "likes"),
    where("postId", "==", post.id)
  );

  const getLikes = async () => {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  };

  const addLike = async () => {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user.uid, likeId: newDoc.id }]
            : [{ userId: user.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeLike = async () => {
    try {
      const likeTodDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );

      const likeTodDeleteData = await getDocs(likeTodDeleteQuery);
      const likeId = likeTodDeleteData.docs[0].id;
      const likeToDelete = doc(db, "likes", likeId);

      await deleteDoc(likeToDelete);
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  const hasLiked = likes?.find((like) => like.userId === user?.uid);

  useEffect(() => {
    getLikes();
  }, []);

  const getDate = () => {
    const date = post.timestamp.toDate().toString();
    return date.substring(0, 21);
  };

  return (
    <div className="post-content">
      <div className="post-title">
        <h1>{post.title}</h1>
      </div>
      <div className="post-description">
        <p>{post.description}</p>
      </div>
      <div className="post-user">
        <p>@{post.username}</p>
      </div>
      <div className="post-created">
        <div className="likes-section">
          <button
            className="like-btn"
            onClick={hasLiked ? removeLike : addLike}
          >
            {hasLiked ? (
              <img src={heartfill} alt="heart-fill" />
            ) : (
              <img src={heart} alt="heart" />
            )}
          </button>
          {likes && <p>{likes?.length}</p>}
        </div>
        <p>{getDate()}</p>
      </div>
    </div>
  );
};
