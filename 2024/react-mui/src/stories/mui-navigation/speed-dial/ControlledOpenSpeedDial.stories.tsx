// stories/mui-navigation/speed-dial/ControlledOpenSpeedDial.stories.tsx
import C from "@/components/mui-navigation/speed-dial/ControlledOpenSpeedDial";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/speed-dial/ControlledOpenSpeedDial",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledOpenSpeedDial: Story = {
  args: {},
};
