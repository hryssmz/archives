// components/TodoItem.tsx
import { useRecoilState } from "recoil";
import { todoListState } from "../libs/atoms";
import type { TodoItem } from "../libs/types";

export interface TodoItemProps {
  item: TodoItem;
}

const replaceItemAtIndex = <T,>(arr: T[], index: number, newValue: T) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

const removeItemAtIndex = <T,>(arr: T[], index: number) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

export default function TodoItem({ item }: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex(listItem => listItem === item);

  const editItemText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: event.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}
