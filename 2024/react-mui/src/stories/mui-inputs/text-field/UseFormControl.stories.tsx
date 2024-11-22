// stories/mui-inputs/text-field/UseFormControl.stories.tsx
import C from "@/components/mui-inputs/text-field/UseFormControl";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/UseFormControl",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const UseFormControl: Story = {
  args: {},
};
