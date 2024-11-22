// stories/mui-complex/data-display/CollapsibleTable.stories.tsx
import C from "@/components/mui-data-display/table/CollapsibleTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/CollapsibleTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CollapsibleTable: Story = {
  args: {},
};
