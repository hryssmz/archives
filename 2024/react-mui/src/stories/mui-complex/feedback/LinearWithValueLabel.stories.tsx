// stories/mui-complex/feedback/LinearWithValueLabel.stories.tsx
import C from "@/components/mui-feedback/progress/LinearWithValueLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/feedback/LinearWithValueLabel",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LinearWithValueLabel: Story = {
  args: {},
};
