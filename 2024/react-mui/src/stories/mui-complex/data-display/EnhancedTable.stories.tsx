// stories/mui-complex/data-display/EnhancedTable.stories.tsx
import C from "@/components/mui-data-display/table/EnhancedTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/EnhancedTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const EnhancedTable: Story = {
  args: {},
};
