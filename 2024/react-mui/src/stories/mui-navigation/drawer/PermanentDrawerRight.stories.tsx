// stories/mui-navigation/drawer/PermanentDrawerRight.stories.tsx
import C from "@/components/mui-navigation/drawer/PermanentDrawerRight";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/PermanentDrawerRight",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PermanentDrawerRight: Story = {
  args: {},
};
