// stories/mui-navigation/speed-dial/SpeedDialTooltipOpen.stories.tsx
import C from "@/components/mui-navigation/speed-dial/SpeedDialTooltipOpen";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/speed-dial/SpeedDialTooltipOpen",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SpeedDialTooltipOpen: Story = {
  args: {},
};
