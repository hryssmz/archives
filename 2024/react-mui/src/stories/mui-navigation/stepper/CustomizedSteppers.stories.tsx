// stories/mui-navigation/stepper/CustomizedSteppers.stories.tsx
import C from "@/components/mui-navigation/stepper/CustomizedSteppers";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/CustomizedSteppers",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedSteppers: Story = {
  args: {},
};
