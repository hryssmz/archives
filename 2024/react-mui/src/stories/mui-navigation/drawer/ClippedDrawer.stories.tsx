// stories/mui-navigation/drawer/ClippedDrawer.stories.tsx
import C from "@/components/mui-navigation/drawer/ClippedDrawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/ClippedDrawer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ClippedDrawer: Story = {
  args: {},
};
