// counter/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterReducer } from "./counter";
import type { Action, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type Dispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export type Thunk<T = void> = ThunkAction<T, State, unknown, Action<string>>;

const useDispatchTyped = useDispatch.withTypes<Dispatch>();
const useSelectorTyped = useSelector.withTypes<State>();

export { useDispatchTyped as useDispatch, useSelectorTyped as useSelector };
