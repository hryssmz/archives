// components/mui-navigation/pagination/PaginationLink.tsx
import {
  createMemoryRouter,
  Link,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function Content() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  return (
    <Pagination
      page={page}
      count={10}
      renderItem={item => (
        <PaginationItem
          component={Link}
          to={`/inbox${item.page === 1 ? "" : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
  );
}

export default function PaginationLink() {
  const router = createMemoryRouter([{ path: "*", element: <Content /> }], {
    initialEntries: ["/inbox"],
    initialIndex: 0,
  });
  return <RouterProvider router={router} />;
}
