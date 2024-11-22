// stories/mui-inputs/button-group/SplitButton.stories.tsx
import C from "@/components/mui-inputs/button-group/SplitButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/SplitButton",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SplitButton: Story = {
  args: {},
};
