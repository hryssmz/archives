// stories/mui-inputs/button/LoadingButtons.stories.tsx
import C from "@/components/mui-inputs/button/LoadingButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/LoadingButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LoadingButtons: Story = {
  args: {},
};
