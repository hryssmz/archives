// stories/mui-inputs/text-field/LayoutTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/LayoutTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/LayoutTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LayoutTextFields: Story = {
  args: {},
};
