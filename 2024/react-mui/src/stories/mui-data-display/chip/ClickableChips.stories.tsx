// stories/mui-data-display/chip/ClickableChips.stories.tsx
import C from "@/components/mui-data-display/chip/ClickableChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/ClickableChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ClickableChips: Story = {
  args: {},
};
