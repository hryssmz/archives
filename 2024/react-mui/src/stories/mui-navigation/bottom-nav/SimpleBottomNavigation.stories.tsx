// stories/mui-navigation/bottom-nav/SimpleBottomNavigation.stories.tsx
import C from "@/components/mui-navigation/bottom-nav/SimpleBottomNavigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/bottom-nav/SimpleBottomNavigation",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimpleBottomNavigation: Story = {
  args: {},
};
