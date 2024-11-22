// stories/mui-inputs/switch/CustomizedSwitches.stories.tsx
import C from "@/components/mui-inputs/switch/CustomizedSwitches";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/CustomizedSwitches",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedSwitches: Story = {
  args: {},
};
