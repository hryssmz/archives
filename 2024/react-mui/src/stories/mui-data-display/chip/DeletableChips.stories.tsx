// stories/mui-data-display/chip/DeletableChips.stories.tsx
import C from "@/components/mui-data-display/chip/DeletableChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/DeletableChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DeletableChips: Story = {
  args: {},
};
