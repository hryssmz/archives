// stories/mui-inputs/slider/TrackInvertedSlider.stories.tsx
import C from "@/components/mui-inputs/slider/TrackInvertedSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/TrackInvertedSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TrackInvertedSlider: Story = {
  args: {},
};
