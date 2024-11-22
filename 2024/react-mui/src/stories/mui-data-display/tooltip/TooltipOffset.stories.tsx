// stories/mui-data-display/tooltip/TooltipOffset.stories.tsx
import C from "@/components/mui-data-display/tooltip/TooltipOffset";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/TooltipOffset",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TooltipOffset: Story = {
  args: {},
};
