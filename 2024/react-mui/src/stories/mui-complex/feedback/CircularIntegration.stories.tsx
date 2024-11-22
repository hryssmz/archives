// stories/mui-complex/feedback/CircularIntegration.stories.tsx
import C from "@/components/mui-feedback/progress/CircularIntegration";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/feedback/CircularIntegration",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularIntegration: Story = {
  args: {},
};
