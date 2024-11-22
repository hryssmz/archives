// stories/mui-complex/inputs/FloatingActionButtonZoom.stories.tsx
import C from "@/components/mui-inputs/fab/FloatingActionButtonZoom";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/FloatingActionButtonZoom",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FloatingActionButtonZoom: Story = {
  args: {},
};
