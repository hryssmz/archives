// stories/mui-inputs/switch/SwitchLabels.stories.tsx
import C from "@/components/mui-inputs/switch/SwitchLabels";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/SwitchLabels",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwitchLabels: Story = {
  args: {},
};
