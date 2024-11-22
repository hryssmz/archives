// stories/mui-complex/data-display/AlignItemsList.stories.tsx
import C from "@/components/mui-data-display/list/AlignItemsList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/AlignItemsList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AlignItemsList: Story = {
  args: {},
};
