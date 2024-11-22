// stories/mui-feedback/skeleton/SkeletonColor.stories.tsx
import C from "@/components/mui-feedback/skeleton/SkeletonColor";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/SkeletonColor",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SkeletonColor: Story = {
  args: {},
};
