// components/xstate-examples/react-todo-mvc/Todos.tsx
import { useEffect } from "react";
import cn from "classnames";
import { useMachine } from "@xstate/react";
import { createBrowserInspector } from "@statelyai/inspect";
import "./base.css";
import "./index.css";
import { todosMachine } from "./todosMachine";
import { useHashChange } from "./useHashChange";
import TodoItem from "./Todo";
import type { Todo } from "./todoMachine";
import type { TodosMachineEvents } from "./todosMachine";

const { inspect } = createBrowserInspector({
  // Comment out the line below to start the inspector
  // autoStart: false,
});

function filterTodos<T extends Todo>(filter: string, todos: T[]) {
  if (filter === "active") {
    return todos.filter(todo => !todo.completed);
  }
  if (filter === "completed") {
    return todos.filter(todo => todo.completed);
  }
  return todos;
}

export default function Todos() {
  const [state, send] = useMachine(todosMachine, { inspect });

  useHashChange(() => {
    send({ type: "SHOW", filter: window.location.hash.slice(2) || "all" });
  });

  useEffect(() => {
    window.location.hash.slice(2) &&
      send({ type: "SHOW", filter: window.location.hash.slice(2) });
  }, [send]);

  const { todos, todo, filter } = state.context;

  const numActiveTodos = todos.filter(todo => !todo.completed).length;
  const allCompleted = todos.length > 0 && numActiveTodos === 0;
  const mark = !allCompleted ? "completed" : "active";
  const markEvent: TodosMachineEvents = !allCompleted
    ? { type: "MARK.completed" }
    : { type: "MARK.active" };
  const filteredTodos = filterTodos(filter, todos);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onKeyDown={e => {
            if (e.key === "Enter") {
              send({
                type: "NEWTODO.COMMIT",
                value: (e.target as HTMLInputElement).value,
              });
            }
          }}
          onChange={e => {
            send({ type: "NEWTODO.CHANGE", value: e.target.value });
          }}
          value={todo}
        />
      </header>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          checked={allCompleted}
          onChange={() => {
            send(markEvent);
          }}
        />
        <label htmlFor="toggle-all" title={`Mark all as ${mark}`}>
          Mark all as {mark}
        </label>
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todoRef={todo.ref} />
          ))}
        </ul>
      </section>
      {todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{numActiveTodos}</strong> item
            {numActiveTodos === 1 ? "" : "s"} left
          </span>
          <ul className="filters">
            <li>
              <a href="#/" className={cn({ selected: filter === "all" })}>
                All
              </a>
            </li>
            <li>
              <a
                href="#/active"
                className={cn({ selected: filter === "active" })}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/completed"
                className={cn({ selected: filter === "completed" })}
              >
                Completed
              </a>
            </li>
          </ul>
          {numActiveTodos < todos.length && (
            <button
              onClick={() => send({ type: "CLEAR_COMPLETED" })}
              className="clear-completed"
            >
              Clear completed
            </button>
          )}
        </footer>
      )}
    </section>
  );
}
