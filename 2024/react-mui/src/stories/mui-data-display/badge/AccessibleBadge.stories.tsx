// stories/mui-data-display/badge/AccessibleBadges.stories.tsx
import C from "@/components/mui-data-display/badge/AccessibleBadges";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/AccessibleBadges",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccessibleBadges: Story = {
  args: {},
};
