// stories/mui-inputs/select/MultipleSelectPlaceholder.stories.tsx
import C from "@/components/mui-inputs/select/MultipleSelectPlaceholder";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/MultipleSelectPlaceholder",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultipleSelectPlaceholder: Story = {
  args: {},
};
