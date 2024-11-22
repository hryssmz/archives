// stories/mui-inputs/slider/MusicPlayerSlider.stories.tsx
import C from "@/components/mui-inputs/slider/MusicPlayerSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/MusicPlayerSlider",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MusicPlayerSlider: Story = {
  args: {},
};
