// stories/mui-layout/grid/BasicGrid.stories.tsx
import C from "@/components/mui-layout/grid/BasicGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/BasicGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicGrid: Story = {
  args: {},
};
