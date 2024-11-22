// stories/mui-navigation/tabs/CenteredTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/CenteredTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/CenteredTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CenteredTabs: Story = {
  args: {},
};
