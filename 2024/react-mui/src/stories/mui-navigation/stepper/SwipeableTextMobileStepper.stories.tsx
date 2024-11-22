// stories/mui-navigation/stepper/SwipeableTextMobileStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/SwipeableTextMobileStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/SwipeableTextMobileStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwipeableTextMobileStepper: Story = {
  args: {},
};
