// stories/mui-navigation/stepper/TextMobileStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/TextMobileStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/TextMobileStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TextMobileStepper: Story = {
  args: {},
};
