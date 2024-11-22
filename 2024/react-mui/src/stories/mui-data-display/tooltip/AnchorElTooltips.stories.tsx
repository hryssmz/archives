// stories/mui-data-display/tooltip/AnchorElTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/AnchorElTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/AnchorElTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AnchorElTooltips: Story = {
  args: {},
};
