import "./styles.css";
import { Post } from "./components/post";
import { usePosts } from "../../hooks/usePosts";
import { BackToTop } from "../../components/BackTop";

export const Home = () => {
  const postsList = usePosts();

  return (
    <div className="home-page">
      {postsList?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
      <BackToTop />
    </div>
  );
};
