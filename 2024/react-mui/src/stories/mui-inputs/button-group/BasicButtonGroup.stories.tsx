// stories/mui-inputs/button-group/BasicButtonGroup.stories.tsx
import C from "@/components/mui-inputs/button-group/BasicButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/BasicButtonGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicButtonGroup: Story = {
  args: {},
};
