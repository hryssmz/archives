// machines/personalTransactionMachine.ts
import { assertEvent, assign, fromPromise, setup } from "xstate";
import { api } from "@/utils/axios";
import { GET_PERSONAL_TRANSACTIONS } from "@/queries";
import type { SnapshotFrom } from "xstate";
import type {
  PageData,
  Query,
  QueryGetPersonalTransactionsArgs,
  TransactionDetail,
  TransactionDetailPage,
} from "@/graphql/graphql";

export interface PersonalTransactionMachineContext {
  results: TransactionDetail[];
  pageData?: PageData;
}

export type PersonalTransactionMachineEvents =
  | ({ type: "FETCH" } & QueryGetPersonalTransactionsArgs)
  | ({ type: "FETCH_MORE" } & QueryGetPersonalTransactionsArgs)
  | { type: `xstate.done.actor.${string}`; output: TransactionDetailPage };

export const personalTransactionMachine = setup({
  types: {
    context: {} as PersonalTransactionMachineContext,
    events: {} as PersonalTransactionMachineEvents,
  },
  actors: {
    "fetch data": fromPromise(
      async ({ input }: { input: QueryGetPersonalTransactionsArgs }) => {
        const response = await api.post<{
          data: Pick<Query, "getPersonalTransactions">;
        }>("/graphql", {
          query: GET_PERSONAL_TRANSACTIONS,
          variables: input,
        });
        return response.data.data.getPersonalTransactions;
      }
    ),
  },
  actions: {
    "set results": assign(({ event }) => {
      assertEvent(event, "xstate.done.actor.loading");
      return {
        results: event.output.results,
        pageData: event.output.pageData,
      };
    }),
    "append results": assign(({ context, event }) => {
      assertEvent(event, "xstate.done.actor.loadingMore");
      return {
        results: [...context.results, ...event.output.results],
        pageData: event.output.pageData,
      };
    }),
  },
}).createMachine({
  id: "personalTransaction",
  initial: "initial",
  context: {
    results: [],
    pageData: undefined,
  },
  states: {
    initial: {
      on: {
        FETCH: { target: "loading" },
      },
    },
    loading: {
      invoke: {
        id: "loading",
        src: "fetch data",
        input: ({ event }) => {
          assertEvent(event, "FETCH");
          const { type, ...input } = event;
          return input;
        },
        onDone: { target: "success", actions: "set results" },
        onError: { target: "failure" },
      },
    },
    loadingMore: {
      invoke: {
        id: "loadingMore",
        src: "fetch data",
        input: ({ event }) => {
          assertEvent(event, "FETCH_MORE");
          const { type, ...input } = event;
          return input;
        },
        onDone: { target: "success", actions: "append results" },
        onError: { target: "failure" },
      },
    },
    success: {
      on: {
        FETCH: { target: "loading" },
        FETCH_MORE: { target: "loadingMore" },
      },
    },
    failure: {
      on: {
        FETCH: { target: "loading" },
        FETCH_MORE: { target: "loadingMore" },
      },
    },
  },
});

export type PersonalTransactionMachine = typeof personalTransactionMachine;
export type PersonalTransactionSnapshot =
  SnapshotFrom<PersonalTransactionMachine>;
