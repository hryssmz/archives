// stories/mui-data-display/tooltip/TooltipMargin.stories.tsx
import C from "@/components/mui-data-display/tooltip/TooltipMargin";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/TooltipMargin",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TooltipMargin: Story = {
  args: {},
};
