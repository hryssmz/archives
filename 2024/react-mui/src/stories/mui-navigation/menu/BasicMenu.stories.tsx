// stories/mui-navigation/menu/BasicMenu.stories.tsx
import C from "@/components/mui-navigation/menu/BasicMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/BasicMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicMenu: Story = {
  args: {},
};
