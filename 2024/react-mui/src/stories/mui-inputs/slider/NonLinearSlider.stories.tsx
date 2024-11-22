// stories/mui-inputs/slider/NonLinearSlider.stories.tsx
import C from "@/components/mui-inputs/slider/NonLinearSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/NonLinearSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NonLinearSlider: Story = {
  args: {},
};
