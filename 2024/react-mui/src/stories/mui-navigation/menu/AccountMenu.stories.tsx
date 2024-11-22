// stories/mui-navigation/menu/AccountMenu.stories.tsx
import C from "@/components/mui-navigation/menu/AccountMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/AccountMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccountMenu: Story = {
  args: {},
};
