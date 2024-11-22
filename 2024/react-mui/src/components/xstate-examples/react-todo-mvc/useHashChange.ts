// components/xstate-examples/react-todo-mvc/useHashChange.ts
import { useEffect } from "react";

export function useHashChange(onHashChange: (event: HashChangeEvent) => void) {
  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [onHashChange]);
}
