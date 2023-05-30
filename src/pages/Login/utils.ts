import { signInWithPopup } from "firebase/auth";
import { auth, gitProvider, googleProvider } from "../../config/auth";

export const signInWithGithub = async () => {
  await signInWithPopup(auth, gitProvider);
};

export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider);
};
