// components/xstate-examples/react-todo-mvc/todoMachine.ts
import { assign, sendParent, setup } from "xstate";
import type { ActorRef, SnapshotFrom } from "xstate";
import type { TodosMachineEvents } from "./todosMachine";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoMachineContext extends Todo {
  prevTitle: string;
}

export type TodoMachineEvents =
  | { type: "BLUR" }
  | { type: "CANCEL" }
  | { type: "CHANGE"; value: string }
  | { type: "COMMIT" }
  | { type: "DELETE" }
  | { type: "EDIT" }
  | { type: "SET_COMPLETED" }
  | { type: "SET_ACTIVE" }
  | { type: "TOGGLE_COMPLETE" };

const todoMachineSetup = setup({
  types: {
    context: {} as TodoMachineContext,
    events: {} as TodoMachineEvents,
  },
  actions: {
    commit: sendParent(
      /* eslint-disable @typescript-eslint/no-unused-vars */
      ({ context: { prevTitle, ...todo } }): TodosMachineEvents => ({
        type: "TODO.COMMIT",
        todo,
      }),
    ),
    delete: sendParent(
      ({ context }): TodosMachineEvents => ({
        type: "TODO.DELETE",
        id: context.id,
      }),
    ),
    toggleComplete: assign(({ context }) => ({
      completed: !context.completed,
    })),
  },
  guards: {
    titleNotEmpty: ({ context }) => context.title.trim().length > 0,
  },
});

export const createTodoMachine = ({ id, title, completed }: Todo) =>
  todoMachineSetup.createMachine({
    id: "todo",
    initial: "reading",
    context: { id, title, prevTitle: title, completed },
    on: {
      TOGGLE_COMPLETE: {
        actions: ["toggleComplete", "commit"],
      },
      DELETE: {
        target: ".deleted",
      },
    },
    states: {
      reading: {
        on: {
          SET_COMPLETED: {
            actions: [assign({ completed: true }), "commit"],
          },
          TOGGLE_COMPLETE: {
            actions: ["toggleComplete", "commit"],
          },
          SET_ACTIVE: {
            actions: [assign({ completed: false }), "commit"],
          },
          EDIT: { target: "editing" },
        },
      },
      editing: {
        entry: assign(({ context }) => ({ prevTitle: context.title })),
        on: {
          CHANGE: {
            actions: assign(({ event }) => ({ title: event.value })),
          },
          COMMIT: [
            { guard: "titleNotEmpty", target: "reading", actions: "commit" },
            { target: "deleted" },
          ],
          BLUR: { target: "reading", actions: "commit" },
          CANCEL: {
            target: "reading",
            actions: assign(({ context }) => ({ title: context.prevTitle })),
          },
        },
      },
      deleted: {
        entry: "delete",
      },
    },
  });

export type TodoMachine = ReturnType<typeof createTodoMachine>;
export type TodoActorRef = ActorRef<
  SnapshotFrom<TodoMachine>,
  TodoMachineEvents
>;
