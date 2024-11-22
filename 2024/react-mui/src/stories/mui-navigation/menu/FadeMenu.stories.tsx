// stories/mui-navigation/menu/FadeMenu.stories.tsx
import C from "@/components/mui-navigation/menu/FadeMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/FadeMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FadeMenu: Story = {
  args: {},
};
