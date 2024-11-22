// stories/mui-complex/surface/ResponsiveAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/ResponsiveAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/ResponsiveAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ResponsiveAppBar: Story = {
  args: {},
};
