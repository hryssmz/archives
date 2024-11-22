// stories/mui-data-display/table/DataTable.stories.tsx
import C from "@/components/mui-data-display/table/DataTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/DataTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DataTable: Story = {
  args: {},
};
