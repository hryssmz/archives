// stories/mui-inputs/slider/ColorSlider.stories.tsx
import C from "@/components/mui-inputs/slider/ColorSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/ColorSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorSlider: Story = {
  args: {},
};
