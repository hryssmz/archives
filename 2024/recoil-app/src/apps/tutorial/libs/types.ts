// libs/types.ts
export interface TodoItem {
  id: number;
  text: string;
  isComplete: boolean;
}

export type TodoListFilter = "Show All" | "Show Completed" | "Show Uncompleted";
