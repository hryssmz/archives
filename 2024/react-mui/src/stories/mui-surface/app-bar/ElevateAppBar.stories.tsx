// stories/mui-surface/app-bar/ElevateAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/ElevateAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/ElevateAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ElevateAppBar: Story = {
  args: {},
};
