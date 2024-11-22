// stories/mui-inputs/select/MultipleSelect.stories.tsx
import C from "@/components/mui-inputs/select/MultipleSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/MultipleSelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultipleSelect: Story = {
  args: {},
};
