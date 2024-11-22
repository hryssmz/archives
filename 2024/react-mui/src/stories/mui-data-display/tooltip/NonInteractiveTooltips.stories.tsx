// stories/mui-data-display/tooltip/NonInteractiveTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/NonInteractiveTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/NonInteractiveTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NonInteractiveTooltips: Story = {
  args: {},
};
