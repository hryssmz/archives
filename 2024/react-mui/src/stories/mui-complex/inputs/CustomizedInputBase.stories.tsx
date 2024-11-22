// stories/mui-complex/inputs/CustomizedInputBase.stories.tsx
import C from "@/components/mui-inputs/text-field/CustomizedInputBase";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/CustomizedInputBase",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedInputBase: Story = {
  args: {},
};
