// stories/xstate-examples/counter/Counter.stories.tsx
import C from "@/components/xstate-examples/counter/Counter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "xstate-examples/counter/Counter",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Counter: Story = {
  args: {},
};
