// stories/mui-inputs/switch/BasicSwitches.stories.tsx
import C from "@/components/mui-inputs/switch/BasicSwitches";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/BasicSwitches",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicSwitches: Story = {
  args: {},
};
