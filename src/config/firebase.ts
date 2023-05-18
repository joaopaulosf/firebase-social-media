// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJjm8fWfHfoDIbnfLiQXD7hw0qGCSfyqw",
  authDomain: "fir-social-media-git-a7608.firebaseapp.com",
  projectId: "fir-social-media-git-a7608",
  storageBucket: "fir-social-media-git-a7608.appspot.com",
  messagingSenderId: "326470398360",
  appId: "1:326470398360:web:6954ed71ebdf4d51f8fbed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GithubAuthProvider();
