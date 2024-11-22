// stories/mui-data-display/chip/ColorChips.stories.tsx
import C from "@/components/mui-data-display/chip/ColorChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/ColorChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorChips: Story = {
  args: {},
};
