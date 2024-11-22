// stories/mui-layout/container/FixedContainer.stories.tsx
import C from "@/components/mui-layout/container/FixedContainer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/container/FixedContainer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FixedContainer: Story = {
  args: {},
};
