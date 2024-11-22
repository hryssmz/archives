// stories/mui-complex/navigation/FixedBottomNavigation.stories.tsx
import C from "@/components/mui-navigation/bottom-nav/FixedBottomNavigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/navigation/FixedBottomNavigation",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FixedBottomNavigation: Story = {
  args: {},
};
