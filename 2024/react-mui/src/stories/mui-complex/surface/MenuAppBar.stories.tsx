// stories/mui-complex/surface/MenuAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/MenuAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/MenuAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MenuAppBar: Story = {
  args: {},
};
