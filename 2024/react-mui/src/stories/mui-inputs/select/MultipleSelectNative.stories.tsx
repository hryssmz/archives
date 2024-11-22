// stories/mui-inputs/select/MultipleSelectNative.stories.tsx
import C from "@/components/mui-inputs/select/MultipleSelectNative";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/MultipleSelectNative",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultipleSelectNative: Story = {
  args: {},
};
