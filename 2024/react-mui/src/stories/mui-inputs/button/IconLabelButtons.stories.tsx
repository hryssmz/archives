// stories/mui-inputs/button/IconLabelButtons.stories.tsx
import C from "@/components/mui-inputs/button/IconLabelButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/IconLabelButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconLabelButtons: Story = {
  args: {},
};
