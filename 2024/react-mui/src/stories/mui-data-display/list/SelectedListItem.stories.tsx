// stories/mui-data-display/list/SelectedListItem.stories.tsx
import C from "@/components/mui-data-display/list/SelectedListItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/SelectedListItem",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectedListItem: Story = {
  args: {},
};
