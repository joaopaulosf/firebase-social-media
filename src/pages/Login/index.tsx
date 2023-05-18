import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import github from "../../images/github-icon.png";
import "./styles.css";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGithub = async () => {
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  return (
    <div className="login-page">
      <button className="login-button" onClick={signInWithGithub}>
        Sign In with GitHub
      </button>
    </div>
  );
};
