// stories/mui-surface/app-bar/HideAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/HideAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/HideAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HideAppBar: Story = {
  args: {},
};
