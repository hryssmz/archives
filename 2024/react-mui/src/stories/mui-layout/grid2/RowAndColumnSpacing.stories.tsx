// stories/mui-layout/grid2/RowAndColumnSpacing.stories.tsx
import C from "@/components/mui-layout/grid2/RowAndColumnSpacing";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/RowAndColumnSpacing",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RowAndColumnSpacing: Story = {
  args: {},
};
