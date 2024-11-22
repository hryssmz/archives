// stories/mui-navigation/stepper/HorizontalLinearStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/HorizontalLinearStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/HorizontalLinearStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HorizontalLinearStepper: Story = {
  args: {},
};
