// stories/mui-feedback/alert/FilledAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/FilledAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/FilledAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FilledAlerts: Story = {
  args: {},
};
