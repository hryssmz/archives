// components/xstate-examples/counter/Counter.tsx
import { useActor } from "@xstate/react";
import { counterMachine } from "./counterMachine";
import "./styles.css";

export default function Counter() {
  const [state, send] = useActor(counterMachine);
  return (
    <div className="card">
      <output id="output">Count is {state.context.count}</output>
      <button id="increment" onClick={() => send({ type: "increment" })}>
        Increment
      </button>
      <button id="decrement" onClick={() => send({ type: "decrement" })}>
        Decrement
      </button>
    </div>
  );
}
