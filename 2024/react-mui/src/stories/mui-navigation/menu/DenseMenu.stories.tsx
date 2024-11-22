// stories/mui-navigation/menu/DenseMenu.stories.tsx
import C from "@/components/mui-navigation/menu/DenseMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/DenseMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DenseMenu: Story = {
  args: {},
};
