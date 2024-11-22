// App.tsx
import { RecoilRoot } from "recoil";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <RecoilRoot>
      <div>
        <h1>Recoil Example</h1>
        <h2>Learn recoil with simple todo list app</h2>
        <TodoList />
      </div>
    </RecoilRoot>
  );
}
