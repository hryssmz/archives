// essentials-example/components/PostsList.tsx
import { useSelector } from "../store";

export interface PostsListProps {}

export default function PostsList() {
  const posts = useSelector(state => state.posts);

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map(post => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
      ))}
    </section>
  );
}
