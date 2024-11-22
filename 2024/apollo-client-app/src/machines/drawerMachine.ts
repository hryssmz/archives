// machines/drawerMachine.ts
import { setup } from "xstate";
import type { ActorRef, SnapshotFrom } from "xstate";

export interface DrawerMachineContext {}

export type DrawerMachineEvents =
  | { type: "CLOSE_DESKTOP" }
  | { type: "CLOSE_MOBILE" }
  | { type: "OPEN_DESKTOP" }
  | { type: "OPEN_MOBILE" }
  | { type: "TOGGLE_DESKTOP" }
  | { type: "TOGGLE_MOBILE" };

export const drawerMachine = setup({
  types: {
    context: {} as DrawerMachineContext,
    events: {} as DrawerMachineEvents,
  },
}).createMachine({
  id: "drawer",
  type: "parallel",
  states: {
    desktop: {
      initial: "open",
      states: {
        open: {
          on: {
            TOGGLE_DESKTOP: { target: "closed" },
            CLOSE_DESKTOP: { target: "closed" },
          },
        },
        closed: {
          on: {
            TOGGLE_DESKTOP: { target: "open" },
            OPEN_DESKTOP: { target: "open" },
          },
        },
        hist: {
          type: "history",
        },
      },
    },
    mobile: {
      initial: "closed",
      states: {
        closed: {
          on: {
            TOGGLE_MOBILE: { target: "open" },
            OPEN_MOBILE: { target: "open" },
          },
        },
        open: {
          on: {
            TOGGLE_MOBILE: { target: "closed" },
            CLOSE_MOBILE: { target: "closed" },
          },
        },
      },
    },
  },
});

export type DrawerMachine = typeof drawerMachine;
export type DrawerSnapshot = SnapshotFrom<DrawerMachine>;
export type DrawerActorRef = ActorRef<DrawerSnapshot, DrawerMachineEvents>;
