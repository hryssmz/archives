// stories/mui-navigation/tabs/BasicTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/BasicTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/BasicTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicTabs: Story = {
  args: {},
};
