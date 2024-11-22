// components/xstate-examples/counter/counterMachine.ts
import { assign, setup } from "xstate";

export interface CounterMachineContext {
  count: number;
}

export type CounterMachineEvents =
  | { type: "increment" }
  | { type: "decrement" };

export const counterMachine = setup({
  types: {
    context: {} as CounterMachineContext,
    events: {} as CounterMachineEvents,
  },
  actions: {
    increment: assign(({ context }) => ({ count: context.count + 1 })),
    decrement: assign(({ context }) => ({ count: context.count - 1 })),
  },
}).createMachine({
  id: "counter",
  context: {
    count: 0,
  },
  on: {
    increment: { actions: { type: "increment" } },
    decrement: { actions: { type: "decrement" } },
  },
});
