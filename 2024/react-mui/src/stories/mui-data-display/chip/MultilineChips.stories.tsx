// stories/mui-data-display/chip/MultilineChips.stories.tsx
import C from "@/components/mui-data-display/chip/MultilineChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/MultilineChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultilineChips: Story = {
  args: {},
};
