// stories/mui-feedback/alert/DescriptionAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/DescriptionAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/DescriptionAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DescriptionAlerts: Story = {
  args: {},
};
