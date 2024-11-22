// stories/mui-inputs/text-field/CustomizedInputsStyleOverrides.stories.tsx
import C from "@/components/mui-inputs/text-field/CustomizedInputsStyleOverrides";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/CustomizedInputsStyleOverrides",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedInputsStyleOverrides: Story = {
  args: {},
};
