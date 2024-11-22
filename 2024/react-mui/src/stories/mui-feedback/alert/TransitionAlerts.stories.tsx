// stories/mui-feedback/alert/TransitionAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/TransitionAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/TransitionAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TransitionAlerts: Story = {
  args: {},
};
