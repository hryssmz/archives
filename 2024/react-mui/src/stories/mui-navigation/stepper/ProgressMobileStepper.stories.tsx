// stories/mui-navigation/stepper/ProgressMobileStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/ProgressMobileStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/ProgressMobileStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ProgressMobileStepper: Story = {
  args: {},
};
