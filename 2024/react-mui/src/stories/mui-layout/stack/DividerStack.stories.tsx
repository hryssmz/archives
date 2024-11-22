// stories/mui-layout/stack/DividerStack.stories.tsx
import C from "@/components/mui-layout/stack/DividerStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/stack/DividerStack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DividerStack: Story = {
  args: {},
};
