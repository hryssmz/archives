// stories/mui-inputs/text-field/MultilineTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/MultilineTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/MultilineTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultilineTextFields: Story = {
  args: {},
};
