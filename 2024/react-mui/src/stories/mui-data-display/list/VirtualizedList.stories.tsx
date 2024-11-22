// stories/mui-data-display/list/VirtualizedList.stories.tsx
import C from "@/components/mui-data-display/list/VirtualizedList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/VirtualizedList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VirtualizedList: Story = {
  args: {},
};
