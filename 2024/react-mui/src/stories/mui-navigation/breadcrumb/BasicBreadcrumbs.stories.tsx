// stories/mui-navigation/breadcrumb/BasicBreadcrumbs.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/BasicBreadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/breadcrumb/BasicBreadcrumbs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicBreadcrumbs: Story = {
  args: {},
};
