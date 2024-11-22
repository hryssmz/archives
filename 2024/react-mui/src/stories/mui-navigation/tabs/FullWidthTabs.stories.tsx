// stories/mui-navigation/tabs/FullWidthTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/FullWidthTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/FullWidthTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FullWidthTabs: Story = {
  args: {},
};
