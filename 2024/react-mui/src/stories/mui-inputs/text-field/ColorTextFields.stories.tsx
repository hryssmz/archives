// stories/mui-inputs/text-field/ColorTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/ColorTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/ColorTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorTextFields: Story = {
  args: {},
};
