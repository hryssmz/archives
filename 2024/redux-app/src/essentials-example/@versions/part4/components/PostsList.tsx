// essentials-example/components/PostsList.tsx
import { Link } from "react-router-dom";
import { useSelector } from "../store";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

export interface PostsListProps {}

export default function PostsList() {
  const posts = useSelector(state => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {orderedPosts.map(post => (
        <article className="post-excerpt" key={post.id}>
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
      ))}
    </section>
  );
}
