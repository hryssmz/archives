// stories/mui-navigation/tabs/IconLabelTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/IconLabelTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/IconLabelTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconLabelTabs: Story = {
  args: {},
};
