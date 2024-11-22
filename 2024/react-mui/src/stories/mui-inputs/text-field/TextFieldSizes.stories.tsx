// stories/mui-inputs/text-field/TextFieldSizes.stories.tsx
import C from "@/components/mui-inputs/text-field/TextFieldSizes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/TextFieldSizes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TextFieldSizes: Story = {
  args: {},
};
