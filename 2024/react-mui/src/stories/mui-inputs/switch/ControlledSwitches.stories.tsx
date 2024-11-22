// stories/mui-inputs/switch/ControlledSwitches.stories.tsx
import C from "@/components/mui-inputs/switch/ControlledSwitches";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/ControlledSwitches",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledSwitches: Story = {
  args: {},
};
