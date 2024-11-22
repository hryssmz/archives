// stories/mui-complex/data-display/ColumnGroupingTable.stories.tsx
import C from "@/components/mui-data-display/table/ColumnGroupingTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/ColumnGroupingTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColumnGroupingTable: Story = {
  args: {},
};
