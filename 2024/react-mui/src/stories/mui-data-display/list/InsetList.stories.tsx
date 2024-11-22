// stories/mui-data-display/list/InsetList.stories.tsx
import C from "@/components/mui-data-display/list/InsetList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/InsetList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InsetList: Story = {
  args: {},
};
