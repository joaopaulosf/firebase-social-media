import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../config/auth";
import { LikesReturn, Like, Props } from "../../config/modules";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const useLikes = ({ post }: Props): LikesReturn => {
  const [likes, setLikes] = useState<Like[] | null>(null);
  const [user] = useAuthState(auth);
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

  return { likes, addLike, removeLike, hasLiked };
};
