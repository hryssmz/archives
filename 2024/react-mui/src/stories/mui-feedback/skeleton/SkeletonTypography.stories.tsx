// stories/mui-feedback/skeleton/SkeletonTypography.stories.tsx
import C from "@/components/mui-feedback/skeleton/SkeletonTypography";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/SkeletonTypography",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SkeletonTypography: Story = {
  args: {},
};
