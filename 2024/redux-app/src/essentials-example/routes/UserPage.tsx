// essentials-example/routes/UserPage.tsx
import { Link, useParams } from "react-router-dom";
import { useSelector } from "../store";
import { selectPostsByUser } from "../store/posts";
import { selectUserById } from "../store/users";

export default function UserPage() {
  const { userId } = useParams();
  const user = useSelector(state => selectUserById(state, userId ?? ""));
  const postsForUser = useSelector(state => selectPostsByUser(state, userId));

  if (user === undefined) {
    return (
      <section>
        <h2>User not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <h2>{user.name}</h2>
      <ul>
        {postsForUser.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
