// stories/mui-inputs/slider/ContinuousSlider.stories.tsx
import C from "@/components/mui-inputs/slider/ContinuousSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/ContinuousSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ContinuousSlider: Story = {
  args: {},
};
