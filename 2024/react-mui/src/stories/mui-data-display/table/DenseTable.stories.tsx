// stories/mui-data-display/table/DenseTable.stories.tsx
import C from "@/components/mui-data-display/table/DenseTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/DenseTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DenseTable: Story = {
  args: {},
};
