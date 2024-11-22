// stories/mui-complex/feedback/CircularWithValueLabel.stories.tsx
import C from "@/components/mui-feedback/progress/CircularWithValueLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/feedback/CircularWithValueLabel",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularWithValueLabel: Story = {
  args: {},
};
