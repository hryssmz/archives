// stories/mui-navigation/breadcrumb/CustomizedBreadcrumbs.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/CustomizedBreadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/breadcrumb/CustomizedBreadcrumbs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedBreadcrumbs: Story = {
  args: {},
};
