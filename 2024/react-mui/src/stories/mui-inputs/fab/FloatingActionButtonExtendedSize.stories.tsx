// stories/mui-inputs/fab/FloatingActionButtonExtendedSize.stories.tsx
import C from "@/components/mui-inputs/fab/FloatingActionButtonExtendedSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/fab/FloatingActionButtonExtendedSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FloatingActionButtonExtendedSize: Story = {
  args: {},
};
