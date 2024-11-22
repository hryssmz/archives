// stories/mui-layout/grid2/AutoGrid.stories.tsx
import C from "@/components/mui-layout/grid2/AutoGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/AutoGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AutoGrid: Story = {
  args: {},
};
