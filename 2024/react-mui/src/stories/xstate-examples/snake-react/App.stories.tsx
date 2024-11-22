// stories/xstate-examples/snake-react/App.stories.tsx
import C from "@/components/xstate-examples/snake-react/App";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "xstate-examples/snake-react/App",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const App: Story = {
  args: {},
};
