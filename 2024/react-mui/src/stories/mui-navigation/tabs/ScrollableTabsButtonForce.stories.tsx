// stories/mui-navigation/tabs/ScrollableTabsButtonForce.stories.tsx
import C from "@/components/mui-navigation/tabs/ScrollableTabsButtonForce";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/ScrollableTabsButtonForce",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ScrollableTabsButtonForce: Story = {
  args: {},
};
