// stories/mui-data-display/table/ReactVirtualizedTable.stories.tsx
import C from "@/components/mui-data-display/table/ReactVirtualizedTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/ReactVirtualizedTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ReactVirtualizedTable: Story = {
  args: {},
};
