// stories/mui-inputs/text-field/TextFieldHiddenLabel.stories.tsx
import C from "@/components/mui-inputs/text-field/TextFieldHiddenLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/TextFieldHiddenLabel",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TextFieldHiddenLabel: Story = {
  args: {},
};
