// stories/mui-surface/paper/SquareCorners.stories.tsx
import C from "@/components/mui-surface/paper/SquareCorners";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/paper/SquareCorners",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SquareCorners: Story = {
  args: {},
};
