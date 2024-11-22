// stories/mui-navigation/pagination/TablePaginationDemo.stories.tsx
import C from "@/components/mui-navigation/pagination/TablePaginationDemo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/TablePaginationDemo",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TablePaginationDemo: Story = {
  args: {},
};
