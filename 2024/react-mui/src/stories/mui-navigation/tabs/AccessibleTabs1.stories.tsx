// stories/mui-navigation/tabs/AccessibleTabs1.stories.tsx
import C from "@/components/mui-navigation/tabs/AccessibleTabs1";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/AccessibleTabs1",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccessibleTabs1: Story = {
  args: {},
};
