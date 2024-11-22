// stories/mui-complex/navigation/PaginationLink.stories.tsx
import C from "@/components/mui-navigation/pagination/PaginationLink";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/navigation/PaginationLink",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PaginationLink: Story = {
  args: {},
};
