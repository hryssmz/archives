// stories/mui-layout/grid2/BasicGrid.stories.tsx
import C from "@/components/mui-layout/grid2/BasicGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/BasicGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicGrid: Story = {
  args: {},
};
