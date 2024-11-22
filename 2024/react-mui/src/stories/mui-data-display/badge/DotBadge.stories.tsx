// stories/mui-data-display/badge/DotBadge.stories.tsx
import C from "@/components/mui-data-display/badge/DotBadge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/DotBadge",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DotBadge: Story = {
  args: {},
};
