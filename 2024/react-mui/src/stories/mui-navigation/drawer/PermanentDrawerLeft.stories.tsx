// stories/mui-navigation/drawer/PermanentDrawerLeft.stories.tsx
import C from "@/components/mui-navigation/drawer/PermanentDrawerLeft";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/PermanentDrawerLeft",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PermanentDrawerLeft: Story = {
  args: {},
};
