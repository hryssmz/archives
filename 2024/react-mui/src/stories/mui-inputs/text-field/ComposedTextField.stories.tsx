// stories/mui-inputs/text-field/ComposedTextField.stories.tsx
import C from "@/components/mui-inputs/text-field/ComposedTextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/ComposedTextField",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ComposedTextField: Story = {
  args: {},
};
