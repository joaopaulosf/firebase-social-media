import { useNavigate } from "react-router-dom";
import "./styles.css";
import { signInWithGithub, signInWithGoogle } from "./utils";

export const Login = () => {
  const navigate = useNavigate();

  const handleClickGit = async () => {
    await signInWithGithub();
    navigate("/");
  };

  const handleClickGoogle = async () => {
    await signInWithGoogle();
    navigate("/");
  };

  return (
    <div className="login-page">
      <button className="login-button" onClick={handleClickGit}>
        Sign In with GitHub
      </button>
      <button className="login-button" onClick={handleClickGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};
