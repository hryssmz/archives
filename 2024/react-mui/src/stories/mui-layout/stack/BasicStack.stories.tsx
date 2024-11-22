// stories/mui-layout/stack/BasicStack.stories.tsx
import C from "@/components/mui-layout/stack/BasicStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/stack/BasicStack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicStack: Story = {
  args: {},
};
