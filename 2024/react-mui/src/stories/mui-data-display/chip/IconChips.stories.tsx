// stories/mui-data-display/chip/IconChips.stories.tsx
import C from "@/components/mui-data-display/chip/IconChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/IconChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconChips: Story = {
  args: {},
};
