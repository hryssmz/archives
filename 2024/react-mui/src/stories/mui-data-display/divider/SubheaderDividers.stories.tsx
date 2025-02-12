// stories/mui-data-display/divider/SubheaderDividers.stories.tsx
import C from "@/components/mui-data-display/divider/SubheaderDividers";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/SubheaderDividers",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SubheaderDividers: Story = {
  args: {},
};
