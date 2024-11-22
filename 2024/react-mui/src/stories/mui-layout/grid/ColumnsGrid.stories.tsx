// stories/mui-layout/grid/ColumnsGrid.stories.tsx
import C from "@/components/mui-layout/grid/ColumnsGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/ColumnsGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColumnsGrid: Story = {
  args: {},
};
