// stories/mui-navigation/drawer/TemporaryDrawer.stories.tsx
import C from "@/components/mui-navigation/drawer/TemporaryDrawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/drawer/TemporaryDrawer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TemporaryDrawer: Story = {
  args: {},
};
