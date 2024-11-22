// stories/mui-feedback/alert/IconAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/IconAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/IconAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconAlerts: Story = {
  args: {},
};
