// stories/mui-inputs/radio-group/RowRadioButtonsGroup.stories.tsx
import C from "@/components/mui-inputs/radio-group/RowRadioButtonsGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/RowRadioButtonsGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RowRadioButtonsGroup: Story = {
  args: {},
};
