// stories/mui-layout/grid/VariableWidthGrid.stories.tsx
import C from "@/components/mui-layout/grid/VariableWidthGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/VariableWidthGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VariableWidthGrid: Story = {
  args: {},
};
