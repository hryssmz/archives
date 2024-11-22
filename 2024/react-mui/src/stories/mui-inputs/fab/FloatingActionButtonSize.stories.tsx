// stories/mui-inputs/fab/FloatingActionButtonSize.stories.tsx
import C from "@/components/mui-inputs/fab/FloatingActionButtonSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/fab/FloatingActionButtonSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FloatingActionButtonSize: Story = {
  args: {},
};
