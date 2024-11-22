// stories/mui-inputs/text-field/ValidationTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/ValidationTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/ValidationTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ValidationTextFields: Story = {
  args: {},
};
