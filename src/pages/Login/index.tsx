import { auth, gitProvider, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Login = () => {
  const navigate = useNavigate();

  const signInWithGithub = async () => {
    await signInWithPopup(auth, gitProvider);
    navigate("/");
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate("/");
  };

  return (
    <div className="login-page">
      <button className="login-button" onClick={signInWithGithub}>
        Sign In with GitHub
      </button>
      <button className="login-button" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};
