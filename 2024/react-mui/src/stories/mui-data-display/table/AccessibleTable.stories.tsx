// stories/mui-data-display/table/AccessibleTable.stories.tsx
import C from "@/components/mui-data-display/table/AccessibleTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/AccessibleTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccessibleTable: Story = {
  args: {},
};
