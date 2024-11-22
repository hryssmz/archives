// stories/mui-navigation/stepper/HorizontalNonLinearStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/HorizontalNonLinearStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/HorizontalNonLinearStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HorizontalNonLinearStepper: Story = {
  args: {},
};
