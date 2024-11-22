// stories/mui-layout/grid2/OffsetGrid.stories.tsx
import C from "@/components/mui-layout/grid2/OffsetGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/OffsetGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const OffsetGrid: Story = {
  args: {},
};
