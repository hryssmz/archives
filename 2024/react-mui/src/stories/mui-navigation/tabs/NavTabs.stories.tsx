// stories/mui-navigation/tabs/NavTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/NavTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/NavTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NavTabs: Story = {
  args: {},
};
