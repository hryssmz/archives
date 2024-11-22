// stories/mui-data-display/list/SwitchListSecondary.stories.tsx
import C from "@/components/mui-data-display/list/SwitchListSecondary";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/SwitchListSecondary",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SwitchListSecondary: Story = {
  args: {},
};
