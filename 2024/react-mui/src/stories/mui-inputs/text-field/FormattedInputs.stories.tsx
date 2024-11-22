// stories/mui-inputs/text-field/FormattedInputs.stories.tsx
import C from "@/components/mui-inputs/text-field/FormattedInputs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/FormattedInputs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FormattedInputs: Story = {
  args: {},
};
