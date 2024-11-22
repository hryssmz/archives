// stories/mui-surface/paper/SimplePaper.stories.tsx
import C from "@/components/mui-surface/paper/SimplePaper";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/paper/SimplePaper",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimplePaper: Story = {
  args: {},
};
