// stories/mui-complex/layout/ComplexGrid.stories.tsx
import C from "@/components/mui-layout/grid/ComplexGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/layout/ComplexGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ComplexGrid: Story = {
  args: {},
};
