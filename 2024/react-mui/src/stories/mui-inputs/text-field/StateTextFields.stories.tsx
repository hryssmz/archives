// stories/mui-inputs/text-field/StateTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/StateTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/StateTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const StateTextFields: Story = {
  args: {},
};
