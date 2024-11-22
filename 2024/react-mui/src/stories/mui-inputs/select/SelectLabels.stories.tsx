// stories/mui-inputs/select/SelectLabels.stories.tsx
import C from "@/components/mui-inputs/select/SelectLabels";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/SelectLabels",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectLabels: Story = {
  args: {},
};
