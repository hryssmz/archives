// stories/mui-navigation/menu/MenuPopupState.stories.tsx
import C from "@/components/mui-navigation/menu/MenuPopupState";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/MenuPopupState",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MenuPopupState: Story = {
  args: {},
};
