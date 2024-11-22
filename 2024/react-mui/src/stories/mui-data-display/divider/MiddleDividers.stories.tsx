// stories/mui-data-display/divider/MiddleDividers.stories.tsx
import C from "@/components/mui-data-display/divider/MiddleDividers";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/MiddleDividers",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MiddleDividers: Story = {
  args: {},
};
