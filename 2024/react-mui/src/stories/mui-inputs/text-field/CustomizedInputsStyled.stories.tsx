// stories/mui-inputs/text-field/CustomizedInputsStyled.stories.tsx
import C from "@/components/mui-inputs/text-field/CustomizedInputsStyled";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/CustomizedInputsStyled",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedInputsStyled: Story = {
  args: {},
};
