// stories/mui-navigation/tabs/CustomizedTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/CustomizedTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/CustomizedTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedTabs: Story = {
  args: {},
};
