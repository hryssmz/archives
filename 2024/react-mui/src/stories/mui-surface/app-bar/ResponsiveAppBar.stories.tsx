// stories/mui-surface/app-bar/ResponsiveAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/ResponsiveAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/ResponsiveAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ResponsiveAppBar: Story = {
  args: {},
};
