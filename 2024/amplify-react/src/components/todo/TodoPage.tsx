// components/todo/TodoPage.tsx
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createTodo } from "@/api/graphql/mutations";
import { listTodos } from "@/api/graphql/queries";
import type { CSSProperties } from "react";
import type { CreateTodoInput, Todo } from "@/api/API";

const styles: Record<string, CSSProperties> = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default function App() {
  const initialState: CreateTodoInput = { name: "", description: "" };
  const client = generateClient();
  const [formState, setFormState] = useState<CreateTodoInput>(initialState);
  const [todos, setTodos] = useState<Todo[] | CreateTodoInput[]>([]);

  async function fetchTodos() {
    try {
      const todoData = await client.graphql({
        query: listTodos,
      });
      const todos = (todoData.data.listTodos?.items ?? []).reduce<Todo[]>(
        (acc, todo) => [...acc, ...(todo === null ? [] : [todo])],
        []
      );
      setTodos(todos);
    } catch (err) {
      console.log("error fetching todos");
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({
        query: createTodo,
        variables: {
          input: todo,
        },
      });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={event =>
          setFormState({ ...formState, name: event.target.value })
        }
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event =>
          setFormState({ ...formState, description: event.target.value })
        }
        style={styles.input}
        value={formState.description as string}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>
        Create Todo
      </button>
      {todos.map((todo, index) => (
        <div key={"id" in todo ? todo.id : index} style={styles.todo}>
          <p style={styles.todoName}>{todo.name}</p>
          <p style={styles.todoDescription}>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
