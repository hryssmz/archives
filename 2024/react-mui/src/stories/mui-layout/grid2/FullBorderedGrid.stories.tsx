// stories/mui-layout/grid2/FullBorderedGrid.stories.tsx
import C from "@/components/mui-layout/grid2/FullBorderedGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/FullBorderedGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FullBorderedGrid: Story = {
  args: {},
};
