// essential-example/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { postsReducer } from "./posts";
import { usersReducer } from "./users";
import type { TypedUseSelectorHook } from "react-redux";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export const useDispatchTyped: () => Dispatch = useDispatch;
export const useSelectorTyped: TypedUseSelectorHook<State> = useSelector;

export { useDispatchTyped as useDispatch, useSelectorTyped as useSelector };
