// stories/mui-data-display/avatar/BadgeAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/BadgeAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/BadgeAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BadgeAvatars: Story = {
  args: {},
};
