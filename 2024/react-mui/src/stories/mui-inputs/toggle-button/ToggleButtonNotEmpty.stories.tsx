// stories/mui-inputs/toggle-button/ToggleButtonNotEmpty.stories.tsx
import C from "@/components/mui-inputs/toggle-button/ToggleButtonNotEmpty";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/ToggleButtonNotEmpty",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ToggleButtonNotEmpty: Story = {
  args: {},
};
