// stories/mui-surface/app-bar/ButtonAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/ButtonAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/ButtonAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ButtonAppBar: Story = {
  args: {},
};
