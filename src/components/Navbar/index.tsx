import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./styles.css";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signOutUser = async () => {
    await signOut(auth);
  };

  return (
    <nav className="navigation-bar">
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="login">
          Login
        </Link>
      </div>

      <div className="user-data">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="" />
            <button onClick={signOutUser}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};
