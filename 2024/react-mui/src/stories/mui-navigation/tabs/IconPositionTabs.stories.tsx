// stories/mui-navigation/tabs/IconPositionTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/IconPositionTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/IconPositionTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconPositionTabs: Story = {
  args: {},
};
