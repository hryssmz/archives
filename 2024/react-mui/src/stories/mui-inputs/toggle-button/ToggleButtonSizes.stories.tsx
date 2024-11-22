// stories/mui-inputs/toggle-button/ToggleButtonSizes.stories.tsx
import C from "@/components/mui-inputs/toggle-button/ToggleButtonSizes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/ToggleButtonSizes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ToggleButtonSizes: Story = {
  args: {},
};
