// components/TodoItemCreator.tsx
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../libs/atoms";

function getId() {
  const id = Number(sessionStorage.getItem("todoId") ?? "-1") + 1;
  sessionStorage.setItem("todoId", `${id}`);
  return id;
}

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
