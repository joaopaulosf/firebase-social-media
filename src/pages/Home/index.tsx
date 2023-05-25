import "./styles.css";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import arrow from "../../images/arrow-up.svg";
import { Post as PostI } from "../../config/interfaces";
import { Post } from "./post";

export const Home = () => {
  const [postsList, setPostsList] = useState<PostI[] | null>(null);
  const [backToTopBtn, setBackToTopBtn] = useState(false);
  // const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(
      query(collection(db, "posts"), orderBy("timestamp", "desc"))
    );
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostI[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  const backToTop = () => {
    if (window.scrollY >= 120) {
      setBackToTopBtn(true);
    } else {
      setBackToTopBtn(false);
    }
  };

  window.addEventListener("scroll", backToTop);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home-page">
      {postsList?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <div className="back-to-top">
        {backToTopBtn && (
          <button onClick={scrollUp}>
            <img src={arrow} alt="arrow-up" />
          </button>
        )}
      </div>
    </div>
  );
};
