// stories/mui-inputs/button/BasicButtons.stories.tsx
import C from "@/components/mui-inputs/button/BasicButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/BasicButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicButtons: Story = {
  args: {},
};
