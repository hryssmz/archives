// stories/mui-navigation/menu/MenuListComposition.stories.tsx
import C from "@/components/mui-navigation/menu/MenuListComposition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/MenuListComposition",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MenuListComposition: Story = {
  args: {},
};
