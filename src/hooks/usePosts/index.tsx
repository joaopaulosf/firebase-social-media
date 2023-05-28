import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../config/auth";
import { Post } from "../../config/interfaces/index";
import { useEffect, useState } from "react";

export const usePosts = () => {
  const [postList, setPostsList] = useState<Post[] | null>(null);

  const getAllPosts = async () => {
    const data = await getDocs(
      query(collection(db, "posts"), orderBy("timestamp", "desc"))
    );
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return postList;
};
