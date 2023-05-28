import heart from "../../assets/svg/heart.svg";
import heartfill from "../../assets/svg/heart-fill.svg";
import { Props } from "../../config/interfaces";
import { useLikes } from "../../hooks/useLikes";

export const Post = (props: Props) => {
  const [likes, addLike, removeLike, hasLiked] = useLikes(props);
  const { post } = props;

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
