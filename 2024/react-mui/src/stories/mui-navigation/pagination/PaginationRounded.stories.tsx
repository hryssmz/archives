// stories/mui-navigation/pagination/PaginationRounded.stories.tsx
import C from "@/components/mui-navigation/pagination/PaginationRounded";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/PaginationRounded",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PaginationRounded: Story = {
  args: {},
};
