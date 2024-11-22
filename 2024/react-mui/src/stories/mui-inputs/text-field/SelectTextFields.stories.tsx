// stories/mui-inputs/text-field/SelectTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/SelectTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/SelectTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectTextFields: Story = {
  args: {},
};
