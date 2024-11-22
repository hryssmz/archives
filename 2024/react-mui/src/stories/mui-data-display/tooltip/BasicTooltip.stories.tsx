// stories/mui-data-display/tooltip/BasicTooltip.stories.tsx
import C from "@/components/mui-data-display/tooltip/BasicTooltip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/BasicTooltip",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicTooltip: Story = {
  args: {},
};
