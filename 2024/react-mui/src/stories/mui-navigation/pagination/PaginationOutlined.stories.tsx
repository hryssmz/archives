// stories/mui-navigation/pagination/PaginationOutlined.stories.tsx
import C from "@/components/mui-navigation/pagination/PaginationOutlined";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/PaginationOutlined",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PaginationOutlined: Story = {
  args: {},
};
