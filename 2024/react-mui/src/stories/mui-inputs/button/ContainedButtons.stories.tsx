// stories/mui-inputs/button/ContainedButtons.stories.tsx
import C from "@/components/mui-inputs/button/ContainedButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/ContainedButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ContainedButtons: Story = {
  args: {},
};
