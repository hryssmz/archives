// stories/mui-navigation/drawer/PersistentDrawerLeft.stories.tsx
import C from "@/components/mui-navigation/drawer/PersistentDrawerLeft";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/PersistentDrawerLeft",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PersistentDrawerLeft: Story = {
  args: {},
};
