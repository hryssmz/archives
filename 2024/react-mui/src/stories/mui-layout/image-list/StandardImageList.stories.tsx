// stories/mui-layout/image-list/StandardImageList.stories.tsx
import C from "@/components/mui-layout/image-list/StandardImageList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/image-list/StandardImageList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const StandardImageList: Story = {
  args: {},
};
