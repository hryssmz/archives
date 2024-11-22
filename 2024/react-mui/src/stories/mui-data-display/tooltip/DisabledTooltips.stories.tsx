// stories/mui-data-display/tooltip/DisabledTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/DisabledTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/DisabledTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DisabledTooltips: Story = {
  args: {},
};
