// components/TodoListFilters.tsx
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../libs/atoms";
import type { TodoListFilter } from "../libs/types";

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const options: { label: string; value: TodoListFilter }[] = [
    { label: "All", value: "Show All" },
    { label: "Completed", value: "Show Completed" },
    { label: "Uncompleted", value: "Show Uncompleted" },
  ];

  const updateFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as TodoListFilter);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
}
