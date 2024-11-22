// stories/mui-data-display/badge/BadgeMax.stories.tsx
import C from "@/components/mui-data-display/badge/BadgeMax";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/BadgeMax",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BadgeMax: Story = {
  args: {},
};
