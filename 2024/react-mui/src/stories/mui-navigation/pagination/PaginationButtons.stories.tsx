// stories/mui-navigation/pagination/PaginationButtons.stories.tsx
import C from "@/components/mui-navigation/pagination/PaginationButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/PaginationButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PaginationButtons: Story = {
  args: {},
};
