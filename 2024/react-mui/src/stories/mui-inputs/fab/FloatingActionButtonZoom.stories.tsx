// stories/mui-inputs/fab/FloatingActionButtonZoom.stories.tsx
import C from "@/components/mui-inputs/fab/FloatingActionButtonZoom";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/fab/FloatingActionButtonZoom",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FloatingActionButtonZoom: Story = {
  args: {},
};
