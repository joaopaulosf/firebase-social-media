import { Link } from "react-router-dom";
import { auth } from "../../config/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOutButton } from "../SignOut";
import { useScroll } from "../../hooks/useScroll";
import "./styles.css";

export const Navbar = () => {
  const nav = useScroll();
  const [user] = useAuthState(auth);

  return (
    <nav className={nav ? "navigation-bar active" : "navigation-bar"}>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        {!user ? (
          <Link className="link" to="login">
            Login
          </Link>
        ) : (
          <Link className="link" to="/newpost">
            New post
          </Link>
        )}
      </div>
      <div className="user-data">
        {user && (
          <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="" />
            <SignOutButton />
          </>
        )}
      </div>
    </nav>
  );
};
