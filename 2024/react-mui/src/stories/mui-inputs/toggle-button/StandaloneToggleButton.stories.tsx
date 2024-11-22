// stories/mui-inputs/toggle-button/StandaloneToggleButton.stories.tsx
import C from "@/components/mui-inputs/toggle-button/StandaloneToggleButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/StandaloneToggleButton",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const StandaloneToggleButton: Story = {
  args: {},
};
