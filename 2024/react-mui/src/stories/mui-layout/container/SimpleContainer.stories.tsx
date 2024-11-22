// stories/mui-layout/container/SimpleContainer.stories.tsx
import C from "@/components/mui-layout/container/SimpleContainer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/container/SimpleContainer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimpleContainer: Story = {
  args: {},
};
