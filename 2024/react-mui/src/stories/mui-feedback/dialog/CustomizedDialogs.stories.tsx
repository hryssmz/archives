// stories/mui-feedback/dialog/CustomizedDialogs.stories.tsx
import C from "@/components/mui-feedback/dialog/CustomizedDialogs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/CustomizedDialogs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedDialogs: Story = {
  args: {},
};
