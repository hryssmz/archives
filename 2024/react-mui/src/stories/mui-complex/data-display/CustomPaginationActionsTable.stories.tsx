// stories/mui-complex/data-display/CustomPaginationActionsTable.stories.tsx
import C from "@/components/mui-data-display/table/CustomPaginationActionsTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/CustomPaginationActionsTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomPaginationActionsTable: Story = {
  args: {},
};
