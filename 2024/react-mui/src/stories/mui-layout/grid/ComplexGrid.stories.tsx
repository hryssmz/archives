// stories/mui-layout/grid/ComplexGrid.stories.tsx
import C from "@/components/mui-layout/grid/ComplexGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/ComplexGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ComplexGrid: Story = {
  args: {},
};
