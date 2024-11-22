// stories/mui-data-display/table/BasicTable.stories.tsx
import C from "@/components/mui-data-display/table/BasicTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/BasicTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicTable: Story = {
  args: {},
};
