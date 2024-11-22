// stories/mui-feedback/progress/CircularWithValueLabel.stories.tsx
import C from "@/components/mui-feedback/progress/CircularWithValueLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/CircularWithValueLabel",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularWithValueLabel: Story = {
  args: {},
};
