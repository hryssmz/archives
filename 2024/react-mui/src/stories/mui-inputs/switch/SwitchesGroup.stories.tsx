// stories/mui-inputs/switch/SwitchesGroup.stories.tsx
import C from "@/components/mui-inputs/switch/SwitchesGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/SwitchesGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwitchesGroup: Story = {
  args: {},
};
