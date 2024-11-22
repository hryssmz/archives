// stories/mui-inputs/text-field/FormPropsTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/FormPropsTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/FormPropsTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FormPropsTextFields: Story = {
  args: {},
};
