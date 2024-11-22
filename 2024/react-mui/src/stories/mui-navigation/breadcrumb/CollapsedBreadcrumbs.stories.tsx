// stories/mui-navigation/breadcrumb/CollapsedBreadcrumbs.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/CollapsedBreadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/breadcrumb/CollapsedBreadcrumbs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CollapsedBreadcrumbs: Story = {
  args: {},
};
