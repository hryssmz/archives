// stories/mui-layout/stack/ZeroWidthStack.stories.tsx
import C from "@/components/mui-layout/stack/ZeroWidthStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/stack/ZeroWidthStack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ZeroWidthStack: Story = {
  args: {},
};
