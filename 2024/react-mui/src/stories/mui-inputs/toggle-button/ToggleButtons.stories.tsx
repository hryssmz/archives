// stories/mui-inputs/toggle-button/ToggleButtons.stories.tsx
import C from "@/components/mui-inputs/toggle-button/ToggleButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/ToggleButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ToggleButtons: Story = {
  args: {},
};
