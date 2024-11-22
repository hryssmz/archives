// stories/mui-layout/grid/RowAndColumnSpacing.stories.tsx
import C from "@/components/mui-layout/grid/RowAndColumnSpacing";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/RowAndColumnSpacing",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RowAndColumnSpacing: Story = {
  args: {},
};
