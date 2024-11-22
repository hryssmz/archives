// components/TodoList.tsx
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import { filteredTodoListState } from "../libs/atoms";

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <div style={{ display: "flex", gap: "10px" }}>
        <TodoItemCreator />
        <TodoListFilters />
      </div>
      {todoList.map(todoItem => (
        <TodoItem item={todoItem} key={todoItem.id} />
      ))}
    </>
  );
}
