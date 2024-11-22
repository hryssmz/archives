// essentials-example/components/PostAuthor.tsx
import { useSelector } from "../store";
import { selectUserById } from "../store/users";

export interface PostAuthorProps {
  userId: string;
}

export default function PostAuthor({ userId }: PostAuthorProps) {
  const author = useSelector(state => selectUserById(state, userId));
  return <span>by {author?.name ?? "Unknown author"}</span>;
}
