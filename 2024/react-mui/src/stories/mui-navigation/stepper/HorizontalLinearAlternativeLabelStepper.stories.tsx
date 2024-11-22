// stories/mui-navigation/stepper/HorizontalLinearAlternativeLabelStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/HorizontalLinearAlternativeLabelStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/HorizontalLinearAlternativeLabelStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HorizontalLinearAlternativeLabelStepper: Story = {
  args: {},
};
