// stories/mui-inputs/button-group/VariantButtonGroup.stories.tsx
import C from "@/components/mui-inputs/button-group/VariantButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/VariantButtonGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VariantButtonGroup: Story = {
  args: {},
};
