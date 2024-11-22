// stories/mui-inputs/radio-group/RadioButtonsGroup.stories.tsx
import C from "@/components/mui-inputs/radio-group/RadioButtonsGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/RadioButtonsGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RadioButtonsGroup: Story = {
  args: {},
};
