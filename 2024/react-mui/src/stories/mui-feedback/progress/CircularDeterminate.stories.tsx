// stories/mui-feedback/progress/CircularDeterminate.stories.tsx
import C from "@/components/mui-feedback/progress/CircularDeterminate";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/CircularDeterminate",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularDeterminate: Story = {
  args: {},
};
