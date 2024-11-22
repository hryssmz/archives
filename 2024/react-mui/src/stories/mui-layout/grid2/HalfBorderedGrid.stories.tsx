// stories/mui-layout/grid2/HalfBorderedGrid.stories.tsx
import C from "@/components/mui-layout/grid2/HalfBorderedGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/HalfBorderedGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HalfBorderedGrid: Story = {
  args: {},
};
