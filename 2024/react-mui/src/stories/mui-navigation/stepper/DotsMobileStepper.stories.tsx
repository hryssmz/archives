// stories/mui-navigation/stepper/DotsMobileStepper.stories.tsx
import C from "@/components/mui-navigation/stepper/DotsMobileStepper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/stepper/DotsMobileStepper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DotsMobileStepper: Story = {
  args: {},
};
