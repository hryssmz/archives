// stories/mui-data-display/divider/VerticalDividerMiddle.stories.tsx
import C from "@/components/mui-data-display/divider/VerticalDividerMiddle";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/VerticalDividerMiddle",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalDividerMiddle: Story = {
  args: {},
};
