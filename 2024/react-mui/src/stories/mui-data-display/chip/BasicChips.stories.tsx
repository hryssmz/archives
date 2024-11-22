// stories/mui-data-display/chip/BasicChips.stories.tsx
import C from "@/components/mui-data-display/chip/BasicChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/BasicChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicChips: Story = {
  args: {},
};
