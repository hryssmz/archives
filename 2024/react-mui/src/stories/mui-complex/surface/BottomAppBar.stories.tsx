// stories/mui-complex/surface/BottomAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/BottomAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/BottomAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BottomAppBar: Story = {
  args: {},
};
