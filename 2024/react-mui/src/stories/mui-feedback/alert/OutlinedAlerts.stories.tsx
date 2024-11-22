// stories/mui-feedback/alert/OutlinedAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/OutlinedAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/OutlinedAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const OutlinedAlerts: Story = {
  args: {},
};
