// stories/mui-complex/data-display/CustomizedList.stories.tsx
import C from "@/components/mui-data-display/list/CustomizedList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/CustomizedList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedList: Story = {
  args: {},
};
