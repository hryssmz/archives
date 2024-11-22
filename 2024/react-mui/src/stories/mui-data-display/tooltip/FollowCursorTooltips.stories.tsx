// stories/mui-data-display/tooltip/FollowCursorTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/FollowCursorTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/FollowCursorTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FollowCursorTooltips: Story = {
  args: {},
};
