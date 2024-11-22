// stories/mui-complex/data-display/CheckboxList.stories.tsx
import C from "@/components/mui-data-display/list/CheckboxList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/data-display/CheckboxList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CheckboxList: Story = {
  args: {},
};
