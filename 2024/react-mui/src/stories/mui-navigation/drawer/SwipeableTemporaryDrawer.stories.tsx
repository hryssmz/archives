// stories/mui-navigation/drawer/SwipeableTemporaryDrawer.stories.tsx
import C from "@/components/mui-navigation/drawer/SwipeableTemporaryDrawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/SwipeableTemporaryDrawer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwipeableTemporaryDrawer: Story = {
  args: {},
};
