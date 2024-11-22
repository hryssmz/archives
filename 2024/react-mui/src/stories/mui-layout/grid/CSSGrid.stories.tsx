// stories/mui-layout/grid/CSSGrid.stories.tsx
import C from "@/components/mui-layout/grid/CSSGrid";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/CSSGrid",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CSSGrid: Story = {
  args: {},
};
