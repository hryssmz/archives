// stories/mui-navigation/menu/SimpleListMenu.stories.tsx
import C from "@/components/mui-navigation/menu/SimpleListMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/SimpleListMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimpleListMenu: Story = {
  args: {},
};
