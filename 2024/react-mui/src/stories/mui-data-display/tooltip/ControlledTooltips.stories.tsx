// stories/mui-data-display/tooltip/ControlledTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/ControlledTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/ControlledTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledTooltips: Story = {
  args: {},
};
