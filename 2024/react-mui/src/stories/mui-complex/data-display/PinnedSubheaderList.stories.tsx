// stories/mui-complex/data-display/PinnedSubheaderList.stories.tsx
import C from "@/components/mui-data-display/list/PinnedSubheaderList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/PinnedSubheaderList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PinnedSubheaderList: Story = {
  args: {},
};
