// stories/mui-navigation/tabs/TabsWrappedLabel.stories.tsx
import C from "@/components/mui-navigation/tabs/TabsWrappedLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/tabs/TabsWrappedLabel",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TabsWrappedLabel: Story = {
  args: {},
};
