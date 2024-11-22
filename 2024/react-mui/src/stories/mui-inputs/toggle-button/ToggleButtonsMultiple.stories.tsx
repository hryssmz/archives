// stories/mui-inputs/toggle-button/ToggleButtonsMultiple.stories.tsx
import C from "@/components/mui-inputs/toggle-button/ToggleButtonsMultiple";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/ToggleButtonsMultiple",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ToggleButtonsMultiple: Story = {
  args: {},
};
