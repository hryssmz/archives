// stories/mui-inputs/select/MultipleSelectCheckmarks.stories.tsx
import C from "@/components/mui-inputs/select/MultipleSelectCheckmarks";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/MultipleSelectCheckmarks",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultipleSelectCheckmarks: Story = {
  args: {},
};
