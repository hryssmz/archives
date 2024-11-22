// stories/mui-inputs/text-field/FullWidthTextField.stories.tsx
import C from "@/components/mui-inputs/text-field/FullWidthTextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/FullWidthTextField",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FullWidthTextField: Story = {
  args: {},
};
