// stories/mui-navigation/tabs/ScrollableTabsButtonVisible.stories.tsx
import C from "@/components/mui-navigation/tabs/ScrollableTabsButtonVisible";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/ScrollableTabsButtonVisible",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ScrollableTabsButtonVisible: Story = {
  args: {},
};
