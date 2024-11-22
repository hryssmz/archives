// components/xstate-examples/react-todo-mvc/Todo.tsx
import { useRef } from "react";
import cn from "classnames";
import { useSelector } from "@xstate/react";
import type { TodoActorRef } from "./todoMachine";

export default function Todo({ todoRef }: { todoRef: TodoActorRef }) {
  const { send } = todoRef;
  const state = useSelector(todoRef, snapshot => snapshot);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { id, title, completed } = state.context;

  return (
    <li
      className={cn({ editing: state.matches("editing"), completed })}
      key={id}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onChange={() => {
            send({ type: "TOGGLE_COMPLETE" });
          }}
          checked={completed}
        />
        <label
          onDoubleClick={() => {
            send({ type: "EDIT" });
            inputRef.current?.select();
          }}
        >
          {title}
        </label>{" "}
        <button className="destory" onClick={() => send({ type: "DELETE" })} />
      </div>
      <input
        className="edit"
        value={title}
        onBlur={() => send({ type: "BLUR" })}
        onChange={e => send({ type: "CHANGE", value: e.target.value })}
        onKeyDown={e => {
          if (e.key === "Enter") {
            send({ type: "COMMIT" });
          } else if (e.key === "Escape") {
            send({ type: "CANCEL" });
          }
        }}
        ref={inputRef}
      />
    </li>
  );
}
