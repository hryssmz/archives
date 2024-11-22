// stories/mui-feedback/skeleton/SkeletonChildren.stories.tsx
import C from "@/components/mui-feedback/skeleton/SkeletonChildren";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/SkeletonChildren",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SkeletonChildren: Story = {
  args: {},
};
