// stories/mui-inputs/button/OutlinedButtons.stories.tsx
import C from "@/components/mui-inputs/button/OutlinedButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/OutlinedButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const OutlinedButtons: Story = {
  args: {},
};
