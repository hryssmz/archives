// stories/mui-data-display/table/CustomizedTables.stories.tsx
import C from "@/components/mui-data-display/table/CustomizedTables";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/CustomizedTables",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedTables: Story = {
  args: {},
};
