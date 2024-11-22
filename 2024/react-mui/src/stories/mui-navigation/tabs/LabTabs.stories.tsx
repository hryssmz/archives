// stories/mui-navigation/tabs/LabTabs.stories.tsx
import C from "@/components/mui-navigation/tabs/LabTabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/LabTabs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LabTabs: Story = {
  args: {},
};
