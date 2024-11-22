// components/xstate-examples/react-todo-mvc/todosMachine.ts
import { assign, enqueueActions, setup } from "xstate";
import { createTodoMachine } from "./todoMachine";
import type { Todo, TodoActorRef } from "./todoMachine";

interface TodoWithRef extends Todo {
  ref: TodoActorRef;
}

export interface TodosMachineContext {
  todo: string;
  todos: TodoWithRef[];
  filter: string;
}

export type TodosMachineEvents =
  | { type: "CLEAR_COMPLETED" }
  | { type: "MARK.active" }
  | { type: "MARK.completed" }
  | { type: "NEWTODO.CHANGE"; value: string }
  | { type: "NEWTODO.COMMIT"; value: string }
  | { type: "SHOW"; filter: TodosMachineContext["filter"] }
  | { type: "TODO.COMMIT"; todo: Todo }
  | { type: "TODO.DELETE"; id: string };

function createTodo(title: string): Todo {
  return {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };
}

function loadPersistedTodos(): Todo[] {
  try {
    return JSON.parse(sessionStorage.getItem("todox-xstate") ?? "[]");
  } catch (e) {
    console.error(e);
    return [];
  }
}

function persistTodos(todos: Todo[]) {
  sessionStorage.setItem("todos-xstate", JSON.stringify(todos));
}

export const todosMachine = setup({
  types: {
    context: {} as TodosMachineContext,
    events: {} as TodosMachineEvents,
  },
  actions: {
    persist: ({ context }) => {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      persistTodos(context.todos.map(({ ref, ...todo }) => todo));
    },
  },
}).createMachine({
  id: "todos",
  context: {
    todo: "",
    todos: [],
    filter: "all",
  },
  initial: "loading",
  states: {
    loading: {
      entry: assign(({ spawn }) => ({
        todos: loadPersistedTodos().map(todo => ({
          ...todo,
          ref: spawn(createTodoMachine(todo)),
        })),
      })),
      always: "ready",
    },
    ready: {},
  },
  on: {
    "NEWTODO.CHANGE": {
      actions: assign(({ event }) => ({ todo: event.value })),
    },
    "NEWTODO.COMMIT": {
      guard: ({ event }) => event.value.trim().length > 0,
      actions: [
        assign(({ context, event, spawn }) => {
          const newTodo = createTodo(event.value.trim());
          const ref = spawn(createTodoMachine(newTodo));
          return {
            todo: "",
            todos: context.todos.concat({ ...newTodo, ref }),
          };
        }),
        "persist",
      ],
    },
    "TODO.COMMIT": {
      actions: [
        assign(({ context, event }) => ({
          todos: context.todos.map(todo =>
            todo.id === event.todo.id
              ? { ...todo, ...event.todo, ref: todo.ref }
              : todo,
          ),
        })),
        "persist",
      ],
    },
    "TODO.DELETE": {
      actions: [
        assign(({ context, event }) => ({
          todos: context.todos.filter(todo => todo.id !== event.id),
        })),
        "persist",
      ],
    },
    SHOW: {
      actions: assign(({ event }) => ({ filter: event.filter })),
    },
    "MARK.completed": {
      actions: ({ context }) => {
        context.todos.forEach(({ ref }) => ref.send({ type: "SET_ACTIVE" }));
      },
    },
    "MARK.active": {
      actions: ({ context }) => {
        context.todos.forEach(({ ref }) => ref.send({ type: "SET_COMPLETED" }));
      },
    },
    CLEAR_COMPLETED: {
      actions: [
        enqueueActions(({ context, enqueue }) =>
          context.todos
            .filter(todo => todo.completed)
            .map(todo => enqueue.stopChild(todo.ref)),
        ),
        assign(({ context }) => ({
          todos: context.todos.filter(todo => !todo.completed),
        })),
      ],
    },
  },
});
