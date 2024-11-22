// stories/mui-data-display/table/StickyHeadTable.stories.tsx
import C from "@/components/mui-data-display/table/StickyHeadTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/StickyHeadTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const StickyHeadTable: Story = {
  args: {},
};
