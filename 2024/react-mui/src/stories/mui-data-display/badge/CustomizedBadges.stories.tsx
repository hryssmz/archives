// stories/mui-data-display/badge/CustomizedBadges.stories.tsx
import C from "@/components/mui-data-display/badge/CustomizedBadges";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/badge/CustomizedBadges",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedBadges: Story = {
  args: {},
};
