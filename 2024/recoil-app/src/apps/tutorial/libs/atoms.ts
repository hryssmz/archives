// libs/atoms.ts
import { atom, selector } from "recoil";
import type { TodoItem, TodoListFilter } from "../libs/types";

export const todoListState = atom<TodoItem[]>({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom<TodoListFilter>({
  key: "todoListFilterState",
  default: "Show All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case "Show Completed":
        return list.filter(item => item.isComplete);
      case "Show Uncompleted":
        return list.filter(item => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter(item => item.isComplete).length;
    const allText = todoList
      .filter(item => !item.isComplete)
      .map(({ text }) => text)
      .join(" ");
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
      allText,
    };
  },
});
