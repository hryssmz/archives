// stories/mui-navigation/speed-dial/OpenIconSpeedDial.stories.tsx
import C from "@/components/mui-navigation/speed-dial/OpenIconSpeedDial";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/speed-dial/OpenIconSpeedDial",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const OpenIconSpeedDial: Story = {
  args: {},
};
