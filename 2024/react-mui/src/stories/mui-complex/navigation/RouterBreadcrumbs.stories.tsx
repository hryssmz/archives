// stories/mui-complex/navigation/RouterBreadcrumbs.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/RouterBreadcrumbs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/navigation/RouterBreadcrumbs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RouterBreadcrumbs: Story = {
  args: {},
};
