// stories/mui-navigation/breadcrumb/ActiveLastBreadcrumb.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/ActiveLastBreadcrumb";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/breadcrumb/ActiveLastBreadcrumb",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ActiveLastBreadcrumb: Story = {
  args: {},
};
