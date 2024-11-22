// stories/mui-navigation/tabs/DisabledTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/DisabledTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/DisabledTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DisabledTabs: Story = {
  args: {},
};
