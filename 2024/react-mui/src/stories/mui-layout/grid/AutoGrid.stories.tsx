// stories/mui-layout/grid/AutoGrid.stories.tsx
import C from "@/components/mui-layout/grid/AutoGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/AutoGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AutoGrid: Story = {
  args: {},
};
