// stories/mui-navigation/speed-dial/PlaygroundSpeedDial.stories.tsx
import C from "@/components/mui-navigation/speed-dial/PlaygroundSpeedDial";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/speed-dial/PlaygroundSpeedDial",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PlaygroundSpeedDial: Story = {
  args: {},
};
