// stories/mui-navigation/pagination/UsePagination.stories.tsx
import C from "@/components/mui-navigation/pagination/UsePagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/UsePagination",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const UsePagination: Story = {
  args: {},
};
