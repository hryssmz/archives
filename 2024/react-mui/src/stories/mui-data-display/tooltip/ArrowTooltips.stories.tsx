// stories/mui-data-display/tooltip/ArrowTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/ArrowTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/ArrowTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ArrowTooltips: Story = {
  args: {},
};
