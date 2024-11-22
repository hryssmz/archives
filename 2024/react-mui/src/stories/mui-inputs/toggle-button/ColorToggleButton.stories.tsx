// stories/mui-inputs/toggle-button/ColorToggleButton.stories.tsx
import C from "@/components/mui-inputs/toggle-button/ColorToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/ColorToggleButton",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorToggleButton: Story = {
  args: {},
};
