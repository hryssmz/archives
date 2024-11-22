// stories/mui-inputs/slider/TrackFalseSlider.stories.tsx
import C from "@/components/mui-inputs/slider/TrackFalseSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/TrackFalseSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TrackFalseSlider: Story = {
  args: {},
};
