// stories/mui-layout/grid2/OverflowGrid.stories.tsx
import C from "@/components/mui-layout/grid2/OverflowGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/OverflowGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const OverflowGrid: Story = {
  args: {},
};
