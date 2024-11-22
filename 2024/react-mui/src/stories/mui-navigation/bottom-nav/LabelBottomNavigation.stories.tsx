// stories/mui-navigation/bottom-nav/LabelBottomNavigation.stories.tsx
import C from "@/components/mui-navigation/bottom-nav/LabelBottomNavigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/bottom-nav/LabelBottomNavigation",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LabelBottomNavigation: Story = {
  args: {},
};
