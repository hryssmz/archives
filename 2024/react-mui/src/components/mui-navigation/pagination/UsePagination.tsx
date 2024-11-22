// components/mui-navigation/pagination/UsePagination.tsx
import { styled } from "@mui/material/styles";
import usePagination from "@mui/material/usePagination";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function UsePagination() {
  const { items } = usePagination({ count: 10 });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => (
          <li key={index}>
            {type === "start-ellipsis" || type === "end-ellipsis" ? (
              "…"
            ) : type === "page" ? (
              <button
                type="button"
                style={{ fontWeight: selected ? "bold" : undefined }}
                {...item}
              >
                {page}
              </button>
            ) : (
              <button type="button" {...item}>
                {type}
              </button>
            )}
          </li>
        ))}
      </List>
    </nav>
  );
}
