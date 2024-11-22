// stories/mui-navigation/tabs/ScrollableTabsButtonAuto.stories.tsx
import C from "@/components/mui-navigation/tabs/ScrollableTabsButtonAuto";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/ScrollableTabsButtonAuto",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ScrollableTabsButtonAuto: Story = {
  args: {},
};
