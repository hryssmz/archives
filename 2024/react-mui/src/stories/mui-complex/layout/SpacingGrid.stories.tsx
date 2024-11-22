// stories/mui-examples/complex-components/SpacingGrid.stories.tsx
import C from "@/components/mui-layout/grid/SpacingGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-examples/complex-components/SpacingGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SpacingGrid: Story = {
  args: {},
};
