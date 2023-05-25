import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./styles.css";
import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const [user] = useAuthState(auth);

  const signOutUser = async () => {
    await signOut(auth);
    navigate("/login");
  };

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
            <button onClick={signOutUser}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};
