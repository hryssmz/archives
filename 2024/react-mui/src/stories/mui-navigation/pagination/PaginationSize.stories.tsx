// stories/mui-navigation/pagination/PaginationSize.stories.tsx
import C from "@/components/mui-navigation/pagination/PaginationSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/PaginationSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PaginationSize: Story = {
  args: {},
};
