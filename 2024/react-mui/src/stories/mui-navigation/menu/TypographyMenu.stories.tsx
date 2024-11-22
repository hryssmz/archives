// stories/mui-navigation/menu/TypographyMenu.stories.tsx
import C from "@/components/mui-navigation/menu/TypographyMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/menu/TypographyMenu",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TypographyMenu: Story = {
  args: {},
};
