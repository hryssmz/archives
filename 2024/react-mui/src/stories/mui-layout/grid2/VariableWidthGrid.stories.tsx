// stories/mui-layout/grid2/VariableWidthGrid.stories.tsx
import C from "@/components/mui-layout/grid2/VariableWidthGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/VariableWidthGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VariableWidthGrid: Story = {
  args: {},
};
