// stories/mui-layout/grid/ResponsiveGrid.stories.tsx
import C from "@/components/mui-layout/grid/ResponsiveGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/ResponsiveGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ResponsiveGrid: Story = {
  args: {},
};
