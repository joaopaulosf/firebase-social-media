import { useNavigate } from "react-router-dom";
import { auth } from "../../config/auth";
import { signOut } from "firebase/auth";

export const SignOutButton = () => {
  const navigate = useNavigate();
  const signOutUser = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return <button onClick={signOutUser}>Log out</button>;
};
