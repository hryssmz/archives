// stories/mui-complex/data-display/NestedList.stories.tsx
import C from "@/components/mui-data-display/list/NestedList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/NestedList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NestedList: Story = {
  args: {},
};
