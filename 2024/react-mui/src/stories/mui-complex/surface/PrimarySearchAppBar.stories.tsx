// stories/mui-complex/surface/PrimarySearchAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/PrimarySearchAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/PrimarySearchAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PrimarySearchAppBar: Story = {
  args: {},
};
