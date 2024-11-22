// stories/mui-data-display/list/NestedList.stories.tsx
import C from "@/components/mui-data-display/list/NestedList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/NestedList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NestedList: Story = {
  args: {},
};
