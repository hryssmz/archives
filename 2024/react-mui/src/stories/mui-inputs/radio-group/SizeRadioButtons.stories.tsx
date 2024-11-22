// stories/mui-inputs/radio-group/SizeRadioButtons.stories.tsx
import C from "@/components/mui-inputs/radio-group/SizeRadioButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/SizeRadioButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SizeRadioButtons: Story = {
  args: {},
};
