// stories/mui-data-display/badge/ColorBadge.stories.tsx
import C from "@/components/mui-data-display/badge/ColorBadge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/ColorBadge",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorBadge: Story = {
  args: {},
};
