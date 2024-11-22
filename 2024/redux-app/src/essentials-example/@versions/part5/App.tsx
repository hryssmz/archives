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
import SinglePostPage from "./routes/SinglePostPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/posts/:postId", element: <SinglePostPage /> },
      { path: "/editPost/:postId", element: <EditPostForm /> },
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
