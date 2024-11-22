// stories/mui-data-display/list/FolderList.stories.tsx
import C from "@/components/mui-data-display/list/FolderList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/FolderList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FolderList: Story = {
  args: {},
};
