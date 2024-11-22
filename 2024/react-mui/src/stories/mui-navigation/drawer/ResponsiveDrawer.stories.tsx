// stories/mui-navigation/drawer/ResponsiveDrawer.stories.tsx
import C from "@/components/mui-navigation/drawer/ResponsiveDrawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/ResponsiveDrawer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ResponsiveDrawer: Story = {
  args: {},
};
