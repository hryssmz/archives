// essentials-example/components/PostAuthor.tsx
import { useSelector } from "../store";

export interface PostAuthorProps {
  userId: string;
}

export default function PostAuthor({ userId }: PostAuthorProps) {
  const author = useSelector(state =>
    state.users.find(user => user.id === userId)
  );
  return <span>by {author?.name ?? "Unknown author"}</span>;
}
