// stories/mui-feedback/progress/LinearBuffer.stories.tsx
import C from "@/components/mui-feedback/progress/LinearBuffer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/LinearBuffer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LinearBuffer: Story = {
  args: {},
};
