// stories/mui-inputs/slider/InputSlider.stories.tsx
import C from "@/components/mui-inputs/slider/InputSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/InputSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InputSlider: Story = {
  args: {},
};
