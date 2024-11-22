// stories/mui-data-display/chip/AvatarChips.stories.tsx
import C from "@/components/mui-data-display/chip/AvatarChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/AvatarChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AvatarChips: Story = {
  args: {},
};
