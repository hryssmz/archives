// stories/mui-data-display/tooltip/TriggersTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/TriggersTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/TriggersTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TriggersTooltips: Story = {
  args: {},
};
