// stories/mui-data-display/chip/ChipsArray.stories.tsx
import C from "@/components/mui-data-display/chip/ChipsArray";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/ChipsArray",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ChipsArray: Story = {
  args: {},
};
