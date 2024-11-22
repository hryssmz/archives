// stories/mui-navigation/breadcrumb/IconBreadcrumbs.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/IconBreadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/breadcrumb/IconBreadcrumbs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconBreadcrumbs: Story = {
  args: {},
};
