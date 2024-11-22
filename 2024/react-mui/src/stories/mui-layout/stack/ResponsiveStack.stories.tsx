// stories/mui-layout/stack/ResponsiveStack.stories.tsx
import C from "@/components/mui-layout/stack/ResponsiveStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/stack/ResponsiveStack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ResponsiveStack: Story = {
  args: {},
};
