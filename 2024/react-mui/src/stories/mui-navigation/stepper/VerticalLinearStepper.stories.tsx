// stories/mui-navigation/stepper/VerticalLinearStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/VerticalLinearStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/VerticalLinearStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalLinearStepper: Story = {
  args: {},
};
