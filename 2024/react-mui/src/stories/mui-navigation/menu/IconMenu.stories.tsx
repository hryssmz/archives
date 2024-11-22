// stories/mui-navigation/menu/IconMenu.stories.tsx
import C from "@/components/mui-navigation/menu/IconMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/IconMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconMenu: Story = {
  args: {},
};
