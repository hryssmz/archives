// stories/mui-inputs/button/IconButtons.stories.tsx
import C from "@/components/mui-inputs/button/IconButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/IconButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconButtons: Story = {
  args: {},
};
