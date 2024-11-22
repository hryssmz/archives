// stories/mui-inputs/switch/ColorSwitches.stories.tsx
import C from "@/components/mui-inputs/switch/ColorSwitches";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/ColorSwitches",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorSwitches: Story = {
  args: {},
};
