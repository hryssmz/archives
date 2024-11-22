// stories/mui-surface/app-bar/DenseAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/DenseAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/DenseAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DenseAppBar: Story = {
  args: {},
};
