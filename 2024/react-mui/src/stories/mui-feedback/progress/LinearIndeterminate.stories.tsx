// stories/mui-feedback/progress/LinearIndeterminate.stories.tsx
import C from "@/components/mui-feedback/progress/LinearIndeterminate";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/LinearIndeterminate",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LinearIndeterminate: Story = {
  args: {},
};
