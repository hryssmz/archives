// stories/mui-inputs/radio-group/ControlledRadioButtonsGroup.stories.tsx
import C from "@/components/mui-inputs/radio-group/ControlledRadioButtonsGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/ControlledRadioButtonsGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledRadioButtonsGroup: Story = {
  args: {},
};
