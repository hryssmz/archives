// essentials-example/App.tsx
import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useDispatch } from "./store";
import { fetchUsers } from "./store/users";
import EditPostForm from "./routes/EditPostForm";
import Home from "./routes/Home";
import Layout from "./routes/Layout";
import NotificationsList from "./routes/NotificationsList";
import SinglePostPage from "./routes/SinglePostPage";
import UserPage from "./routes/UserPage";
import UsersList from "./routes/UsersList";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts/:postId", element: <SinglePostPage /> },
      { path: "/editPost/:postId", element: <EditPostForm /> },
      { path: "/users", element: <UsersList /> },
      { path: "/users/:userId", element: <UserPage /> },
      { path: "/notifications", element: <NotificationsList /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
