// stories/mui-complex/inputs/MultipleSelectNative.stories.tsx
import C from "@/components/mui-inputs/select/MultipleSelectNative";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/MultipleSelectNative",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultipleSelectNative: Story = {
  args: {},
};
