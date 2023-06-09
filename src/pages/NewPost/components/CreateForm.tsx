import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../../config/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { FormData } from "../../../config/interfaces";
import { schema } from "../utils";
import "./styles.css";

export const CreateForm = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onNewPost = async (data: FormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      id: user?.uid,
      timestamp: new Date(),
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onNewPost)} className="newpost">
      <input
        className="form-data custom-title"
        placeholder="Title"
        {...register("title")}
      />
      <p>{errors.title?.message}</p>
      <textarea
        className="form-data custom-textarea"
        placeholder="Description"
        {...register("description")}
      />
      <p>{errors.description?.message}</p>
      <input className="send-data" type="submit" value="submit" />
    </form>
  );
};
