// stories/mui-navigation/tabs/VerticalTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/VerticalTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/VerticalTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalTabs: Story = {
  args: {},
};
