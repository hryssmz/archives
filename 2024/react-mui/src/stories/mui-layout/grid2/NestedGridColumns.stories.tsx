// stories/mui-layout/grid2/NestedGridColumns.stories.tsx
import C from "@/components/mui-layout/grid2/NestedGridColumns";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/NestedGridColumns",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NestedGridColumns: Story = {
  args: {},
};
