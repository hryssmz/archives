// components/xstate-examples/snake-react/snakeMachine.ts
import { fromCallback, or, setup } from "xstate";

type Dir = "Up" | "Left" | "Down" | "Right";
interface Point {
  x: number;
  y: number;
}
interface BodyPart extends Point {
  dir: Dir;
}
type Snake = BodyPart[];

export interface SnakeMachineContext {
  snake: Snake;
  gridSize: Point;
  dir: Dir;
  apple: Point;
  score: number;
  highScore: number;
}

function makeInitialSnake(gridSize: Point): Snake {
  const head: BodyPart = {
    x: Math.floor(gridSize.x / 2),
    y: Math.floor(gridSize.y / 2),
    dir: "Right",
  };
  return [head, { ...head, x: head.x - 1 }, { ...head, x: head.x - 2 }];
}

function makeInitialApple(gridSize: Point): Point {
  return {
    x: Math.floor((gridSize.x * 3) / 4),
    y: Math.floor(gridSize.y / 2),
  };
}

export function createInitialContext(): SnakeMachineContext {
  const gridSize: Point = { x: 25, y: 15 };
  return {
    gridSize,
    snake: makeInitialSnake(gridSize),
    apple: makeInitialApple(gridSize),
    score: 0,
    highScore: 0,
    dir: "Right",
  };
}

export const snakeMachine = setup({
  types: {
    context: {} as SnakeMachineContext,
    events: {} as
      | { type: "NEW_GAME" }
      | { type: "ARROW_KEY"; dir: Dir }
      | { type: "TICK" },
  },
  actors: {
    ticks: fromCallback(({ sendBack }) => {
      const i = setInterval(() => {
        sendBack({ type: "TICK" });
      }, 80);

      return () => clearInterval(i);
    }),
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGUB2BDA1mAsugxgBYCWqYAdAHJgDuABAOLoC2YAxAIIBKXA8gOoB9ANIBRAJoBtAAwBdRKAAOAe1jEALsWWoFIAB6IAjAHYAnOQCsAFgBsADmN2AzFbsAmOxYcAaEAE9EC2MLcjtXUwtTUzCLC2lDAF8E3zQsXAISMnIcZQA3Uig2ABUASQBhYRl5JBAVNU1tXQMEJxsnclNDK2kbeKt+4ytY3wCEV0NyaSdTaWsLGxtbJxcklIxsPCJSChz81ELuPiExKTldOo0tHRrm1ulyN0NpUxdjM1c7OxHEJ09Jz1Mbhs0UW0lcVlWIFSGwy22yeQKbCq51Ul0aNx+FgmwIsbiiTmMLjxwW+CDc3XIxiB81MS2WQxskOh6S2WV2iMkhmqSlRDWuoGaFicIQcViihkePU6xlJNjc93Jj2Mhl+jmcxiZ6xZmQoTFYdF4uTAACc2JRREIGBwcKJkTULnymoFhaFBuLJcCTKS7BM4tJ-b8XoYfW4kskQKhlBA4LpmZsdSj6lcnQgALQ2Unpyb+nO53Ma8Nx2FZaj0PVgRNo-n6RBWNykiU2SaRGb+lVA4WMwta+Nw9n7SuOjEtVoPFwEky-WJ2F6krwTKKPdxdGy4wymTVpXtZcsGo3GwfJ4dmEI2ZWtrG-aYNjyWFs59tteZhhJAA */
  id: "SnakeMachine",
  context: createInitialContext(),
  initial: "New Game",
  states: {
    "New Game": {
      on: {
        ARROW_KEY: {
          actions: "save dir",
          target: "Moving",
        },
      },
    },
    Moving: {
      entry: "move snake",
      invoke: {
        src: "ticks",
      },
      always: [
        {
          guard: "ate apple",
          actions: ["grow snake", "increase score", "show new apple"],
        },
        {
          guard: or(["hit tail", "hit wall"]),
          target: "Game Over",
        },
      ],
      on: {
        TICK: {
          actions: "move snake",
        },
        ARROW_KEY: {
          actions: "save dir",
          target: "Moving",
        },
      },
    },
    "Game Over": {
      on: {
        NEW_GAME: {
          actions: "reset",
          description: 'triggered by pressing the "r" key',
          target: "New Game",
        },
      },
    },
  },
});
