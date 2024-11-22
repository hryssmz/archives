// stories/mui-data-display/tooltip/TransitionsTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/TransitionsTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/TransitionsTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TransitionsTooltips: Story = {
  args: {},
};
