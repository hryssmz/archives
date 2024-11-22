// stories/xstate-examples/react-template/App.stories.tsx
import C from "@/components/xstate-examples/react-template/App";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "xstate-examples/react-template/App",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const App: Story = {
  args: {},
};
