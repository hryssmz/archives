// stories/mui-templates/dashboard/Dashboard.stories.tsx
import C from "@/components/mui-templates/dashboard/Dashboard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-templates/dashboard/Dashboard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Dashboard: Story = {
  args: {},
};
