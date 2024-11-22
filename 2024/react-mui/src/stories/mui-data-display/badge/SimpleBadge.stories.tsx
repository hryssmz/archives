// stories/mui-data-display/badge/SimpleBadge.stories.tsx
import C from "@/components/mui-data-display/badge/SimpleBadge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/SimpleBadge",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimpleBadge: Story = {
  args: {},
};
