// stories/mui-feedback/progress/DelayingAppearance.stories.tsx
import C from "@/components/mui-feedback/progress/DelayingAppearance";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/DelayingAppearance",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DelayingAppearance: Story = {
  args: {},
};
