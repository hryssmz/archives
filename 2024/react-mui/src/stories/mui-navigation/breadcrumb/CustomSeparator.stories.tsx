// stories/mui-navigation/breadcrumb/CustomSeparator.stories.tsx
import C from "@/components/mui-navigation/breadcrumb/CustomSeparator";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/breadcrumb/CustomSeparator",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomSeparator: Story = {
  args: {},
};
