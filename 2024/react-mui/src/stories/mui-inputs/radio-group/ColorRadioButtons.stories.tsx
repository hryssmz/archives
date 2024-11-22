// stories/mui-inputs/radio-group/ColorRadioButtons.stories.tsx
import C from "@/components/mui-inputs/radio-group/ColorRadioButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/ColorRadioButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorRadioButtons: Story = {
  args: {},
};
