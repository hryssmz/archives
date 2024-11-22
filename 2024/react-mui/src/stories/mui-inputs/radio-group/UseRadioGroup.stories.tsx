// stories/mui-inputs/radio-group/UseRadioGroup.stories.tsx
import C from "@/components/mui-inputs/radio-group/UseRadioGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/UseRadioGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const UseRadioGroup: Story = {
  args: {},
};
