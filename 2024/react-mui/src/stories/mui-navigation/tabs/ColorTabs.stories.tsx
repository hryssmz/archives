// stories/mui-navigation/tabs/ColorTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/ColorTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/ColorTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorTabs: Story = {
  args: {},
};
