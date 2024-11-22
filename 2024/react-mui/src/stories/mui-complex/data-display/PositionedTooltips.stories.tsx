// stories/mui-complex/data-display/PositionedTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/PositionedTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/PositionedTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PositionedTooltips: Story = {
  args: {},
};
