// stories/mui-data-display/chip/SizesChips.stories.tsx
import C from "@/components/mui-data-display/chip/SizesChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/SizesChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SizesChips: Story = {
  args: {},
};
