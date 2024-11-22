// stories/mui-data-display/divider/VerticalDividers.stories.tsx
import C from "@/components/mui-data-display/divider/VerticalDividers";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/VerticalDividers",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalDividers: Story = {
  args: {},
};
