// stories/mui-data-display/badge/BadgeOverlap.stories.tsx
import C from "@/components/mui-data-display/badge/BadgeOverlap";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/BadgeOverlap",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BadgeOverlap: Story = {
  args: {},
};
