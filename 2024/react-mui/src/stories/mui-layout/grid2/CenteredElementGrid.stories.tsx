// stories/mui-layout/grid2/CenteredElementGrid.stories.tsx
import C from "@/components/mui-layout/grid2/CenteredElementGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/CenteredElementGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CenteredElementGrid: Story = {
  args: {},
};
