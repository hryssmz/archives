// stories/mui-data-display/chip/ClickableAndDeletableChips.stories.tsx
import C from "@/components/mui-data-display/chip/ClickableAndDeletableChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/ClickableAndDeletableChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ClickableAndDeletableChips: Story = {
  args: {},
};
