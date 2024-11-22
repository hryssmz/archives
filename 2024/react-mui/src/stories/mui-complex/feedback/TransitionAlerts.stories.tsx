// stories/mui-complex/feedback/TransitionAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/TransitionAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/feedback/TransitionAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TransitionAlerts: Story = {
  args: {},
};
