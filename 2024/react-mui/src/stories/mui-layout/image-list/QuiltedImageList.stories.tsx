// stories/mui-layout/image-list/QuiltedImageList.stories.tsx
import C from "@/components/mui-layout/image-list/QuiltedImageList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/image-list/QuiltedImageList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const QuiltedImageList: Story = {
  args: {},
};
