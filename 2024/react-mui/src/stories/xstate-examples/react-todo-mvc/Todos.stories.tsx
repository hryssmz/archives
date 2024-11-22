// stories/xstate-examples/react-todo-mvc/Todos.stories.tsx
import C from "@/components/xstate-examples/react-todo-mvc/Todos";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "xstate-examples/react-todo-mvc/Todos",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Todos: Story = {
  args: {},
};
