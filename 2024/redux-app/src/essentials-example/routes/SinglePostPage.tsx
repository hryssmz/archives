// essentials-example/routes/SinglePostPage.tsx
import { Link, useParams } from "react-router-dom";
import { useSelector } from "../store";
import { selectPostById } from "../store/posts";
import PostAuthor from "../components/PostAuthor";
import ReactionButtons from "../components/ReactionButtons";
import TimeAgo from "../components/TimeAgo";

export default function SinglePostPage() {
  const { postId } = useParams();
  const post = useSelector(state => selectPostById(state, postId ?? ""));
  if (post === undefined) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }
  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
}
