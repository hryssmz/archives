// stories/mui-data-display/tooltip/DelayTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/DelayTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/DelayTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DelayTooltips: Story = {
  args: {},
};
