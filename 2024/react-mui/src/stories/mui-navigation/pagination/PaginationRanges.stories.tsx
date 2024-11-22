// stories/mui-navigation/pagination/PaginationRanges.stories.tsx
import C from "@/components/mui-navigation/pagination/PaginationRanges";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/PaginationRanges",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PaginationRanges: Story = {
  args: {},
};
