// essentials-example/components/PostExcerpt.tsx
import { Link } from "react-router-dom";
import { useSelector } from "../store";
import { selectPostById } from "../store/posts";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export interface PostExcerptProps {
  postId: string;
}

export default function PostExcerpt({ postId }: PostExcerptProps) {
  const post = useSelector(state => selectPostById(state, postId));

  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>

      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
}
