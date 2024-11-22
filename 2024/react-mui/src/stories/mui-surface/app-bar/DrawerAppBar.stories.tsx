// stories/mui-surface/app-bar/DrawerAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/DrawerAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/DrawerAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DrawerAppBar: Story = {
  args: {},
};
