// stories/mui-complex/data-display/SelectedListItem.stories.tsx
import C from "@/components/mui-data-display/list/SelectedListItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/SelectedListItem",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectedListItem: Story = {
  args: {},
};
