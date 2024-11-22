// stories/mui-data-display/divider/ListDividers.stories.tsx
import C from "@/components/mui-data-display/divider/ListDividers";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/ListDividers",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ListDividers: Story = {
  args: {},
};
