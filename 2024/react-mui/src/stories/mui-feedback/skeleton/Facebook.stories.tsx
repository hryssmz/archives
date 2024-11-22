// stories/mui-feedback/skeleton/Facebook.stories.tsx
import C from "@/components/mui-feedback/skeleton/Facebook";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/Facebook",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Facebook: Story = {
  args: {},
};
