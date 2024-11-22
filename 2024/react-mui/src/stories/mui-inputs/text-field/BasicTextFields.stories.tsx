// stories/mui-inputs/text-field/BasicTextFields.stories.tsx
import C from "@/components/mui-inputs/text-field/BasicTextFields";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/BasicTextFields",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicTextFields: Story = {
  args: {},
};
