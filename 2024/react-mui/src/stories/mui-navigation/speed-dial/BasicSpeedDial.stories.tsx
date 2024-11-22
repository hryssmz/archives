// stories/mui-navigation/speed-dial/BasicSpeedDial.stories.tsx
import C from "@/components/mui-navigation/speed-dial/BasicSpeedDial";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/speed-dial/BasicSpeedDial",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicSpeedDial: Story = {
  args: {},
};
