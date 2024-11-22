// stories/mui-feedback/alert/ActionAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/ActionAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/ActionAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ActionAlerts: Story = {
  args: {},
};
