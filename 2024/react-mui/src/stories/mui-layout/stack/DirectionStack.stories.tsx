// stories/mui-layout/stack/DirectionStack.stories.tsx
import C from "@/components/mui-layout/stack/DirectionStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/stack/DirectionStack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DirectionStack: Story = {
  args: {},
};
