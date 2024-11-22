// stories/mui-navigation/menu/CustomizedMenus.stories.tsx
import C from "@/components/mui-navigation/menu/CustomizedMenus";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/CustomizedMenus",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedMenus: Story = {
  args: {},
};
