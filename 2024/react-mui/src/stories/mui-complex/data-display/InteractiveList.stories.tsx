// stories/mui-complex/data-display/InteractiveList.stories.tsx
import C from "@/components/mui-data-display/list/InteractiveList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/InteractiveList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InteractiveList: Story = {
  args: {},
};
