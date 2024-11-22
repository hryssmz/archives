// stories/mui-navigation/menu/PositionedMenu.stories.tsx
import C from "@/components/mui-navigation/menu/PositionedMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/PositionedMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PositionedMenu: Story = {
  args: {},
};
