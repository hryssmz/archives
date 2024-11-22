// stories/mui-inputs/slider/CustomizedSlider.stories.tsx
import C from "@/components/mui-inputs/slider/CustomizedSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/CustomizedSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedSlider: Story = {
  args: {},
};
