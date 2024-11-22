// stories/mui-navigation/drawer/PersistentDrawerRight.stories.tsx
import C from "@/components/mui-navigation/drawer/PersistentDrawerRight";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/PersistentDrawerRight",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PersistentDrawerRight: Story = {
  args: {},
};
