// stories/mui-navigation/stepper/HorizontalStepperWithError.stories.tsx
import C from "@/components/mui-navigation/stepper/HorizontalStepperWithError";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/HorizontalStepperWithError",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HorizontalStepperWithError: Story = {
  args: {},
};
