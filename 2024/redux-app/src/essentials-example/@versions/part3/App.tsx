// essentials-example/App.tsx
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/Home";
import Layout from "./routes/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
