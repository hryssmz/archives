// essentials-example/App.tsx
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
  return <RouterProvider router={router} />;
}
