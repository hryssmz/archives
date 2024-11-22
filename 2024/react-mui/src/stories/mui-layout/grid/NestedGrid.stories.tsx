// stories/mui-layout/grid/NestedGrid.stories.tsx
import C from "@/components/mui-layout/grid/NestedGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/NestedGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NestedGrid: Story = {
  args: {},
};
