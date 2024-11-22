// stories/mui-feedback/progress/LinearDeterminate.stories.tsx
import C from "@/components/mui-feedback/progress/LinearDeterminate";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/LinearDeterminate",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LinearDeterminate: Story = {
  args: {},
};
