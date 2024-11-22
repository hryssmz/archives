// stories/mui-inputs/select/MultipleSelectChip.stories.tsx
import C from "@/components/mui-inputs/select/MultipleSelectChip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/MultipleSelectChip",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultipleSelectChip: Story = {
  args: {},
};
