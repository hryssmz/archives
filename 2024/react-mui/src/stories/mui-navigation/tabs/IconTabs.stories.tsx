// stories/mui-navigation/tabs/IconTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/IconTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/IconTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconTabs: Story = {
  args: {},
};
