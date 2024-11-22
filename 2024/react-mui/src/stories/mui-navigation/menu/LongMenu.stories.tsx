// stories/mui-navigation/menu/LongMenu.stories.tsx
import C from "@/components/mui-navigation/menu/LongMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/LongMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LongMenu: Story = {
  args: {},
};
