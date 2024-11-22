// stories/mui-layout/grid2/FullWidthGrid.stories.tsx
import C from "@/components/mui-layout/grid2/FullWidthGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid2/FullWidthGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FullWidthGrid: Story = {
  args: {},
};
