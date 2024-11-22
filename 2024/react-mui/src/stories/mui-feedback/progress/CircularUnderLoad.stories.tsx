// stories/mui-feedback/progress/CircularUnderLoad.stories.tsx
import C from "@/components/mui-feedback/progress/CircularUnderLoad";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/CircularUnderLoad",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularUnderLoad: Story = {
  args: {},
};
