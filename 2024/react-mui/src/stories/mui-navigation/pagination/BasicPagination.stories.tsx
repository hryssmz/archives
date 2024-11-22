// stories/mui-navigation/pagination/BasicPagination.stories.tsx
import C from "@/components/mui-navigation/pagination/BasicPagination";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/BasicPagination",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicPagination: Story = {
  args: {},
};
