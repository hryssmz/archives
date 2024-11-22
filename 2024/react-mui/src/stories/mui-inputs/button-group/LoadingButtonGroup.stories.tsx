// stories/mui-inputs/button-group/LoadingButtonGroup.stories.tsx
import C from "@/components/mui-inputs/button-group/LoadingButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/LoadingButtonGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LoadingButtonGroup: Story = {
  args: {},
};
