// stories/mui-data-display/table/SpanningTable.stories.tsx
import C from "@/components/mui-data-display/table/SpanningTable";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/table/SpanningTable",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SpanningTable: Story = {
  args: {},
};
