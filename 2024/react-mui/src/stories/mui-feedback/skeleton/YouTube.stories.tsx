// stories/mui-feedback/skeleton/YouTube.stories.tsx
import C from "@/components/mui-feedback/skeleton/YouTube";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/YouTube",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const YouTube: Story = {
  args: {},
};
