// stories/mui-feedback/progress/CircularIndeterminate.stories.tsx
import C from "@/components/mui-feedback/progress/CircularIndeterminate";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/CircularIndeterminate",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularIndeterminate: Story = {
  args: {},
};
