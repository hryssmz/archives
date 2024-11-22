// stories/mui-surface/app-bar/ProminentAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/ProminentAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/ProminentAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ProminentAppBar: Story = {
  args: {},
};
