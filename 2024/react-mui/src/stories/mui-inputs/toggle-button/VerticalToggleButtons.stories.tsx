// stories/mui-inputs/toggle-button/VerticalToggleButtons.stories.tsx
import C from "@/components/mui-inputs/toggle-button/VerticalToggleButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/VerticalToggleButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalToggleButtons: Story = {
  args: {},
};
