// stories/mui-surface/paper/Elevation.stories.tsx
import C from "@/components/mui-surface/paper/Elevation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/paper/Elevation",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Elevation: Story = {
  args: {},
};
