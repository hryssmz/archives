// stories/mui-data-display/table/CustomPaginationActionsTable.stories.tsx
import C from "@/components/mui-data-display/table/CustomPaginationActionsTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/CustomPaginationActionsTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomPaginationActionsTable: Story = {
  args: {},
};
