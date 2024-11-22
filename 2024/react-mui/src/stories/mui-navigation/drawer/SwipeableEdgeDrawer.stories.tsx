// stories/mui-navigation/drawer/SwipeableEdgeDrawer.stories.tsx
import C from "@/components/mui-navigation/drawer/SwipeableEdgeDrawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/SwipeableEdgeDrawer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwipeableEdgeDrawer: Story = {
  args: {},
};
