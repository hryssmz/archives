// stories/mui-navigation/menu/ContextMenu.stories.tsx
import C from "@/components/mui-navigation/menu/ContextMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/ContextMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ContextMenu: Story = {
  args: {},
};
