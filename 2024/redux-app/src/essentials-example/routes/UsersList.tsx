// essentials-example/routes/UsersList.tsx
import { Link } from "react-router-dom";
import { useSelector } from "../store";
import { selectAllUsers } from "../store/users";

export default function UsersList() {
  const users = useSelector(selectAllUsers);

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
