// stories/mui-data-display/badge/BadgeVisibility.stories.tsx
import C from "@/components/mui-data-display/badge/BadgeVisibility";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/BadgeVisibility",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BadgeVisibility: Story = {
  args: {},
};
