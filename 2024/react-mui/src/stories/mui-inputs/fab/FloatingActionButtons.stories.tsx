// stories/mui-inputs/fab/FloatingActionButtons.stories.tsx
import C from "@/components/mui-inputs/fab/FloatingActionButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/fab/FloatingActionButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FloatingActionButtons: Story = {
  args: {},
};
