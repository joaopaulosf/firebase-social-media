import { MouseEventHandler } from "react";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
  timestamp: any;
}

export interface Props {
  post: Post;
}

export interface Like {
  userId: string;
  likeId: string;
}

export interface FormData {
  title: string;
  description: string;
}

export interface LikesReturn {
  likes: Like[] | null;
  addLike: MouseEventHandler;
  removeLike: MouseEventHandler;
  hasLiked: Like | undefined;
}
