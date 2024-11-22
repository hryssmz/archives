// stories/mui-data-display/list/BasicList.stories.tsx
import C from "@/components/mui-data-display/list/BasicList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/BasicList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicList: Story = {
  args: {},
};
