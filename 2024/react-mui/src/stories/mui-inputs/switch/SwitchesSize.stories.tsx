// stories/mui-inputs/switch/SwitchesSize.stories.tsx
import C from "@/components/mui-inputs/switch/SwitchesSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/SwitchesSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwitchesSize: Story = {
  args: {},
};
