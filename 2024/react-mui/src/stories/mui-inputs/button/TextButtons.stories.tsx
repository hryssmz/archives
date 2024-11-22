// stories/mui-inputs/button/TextButtons.stories.tsx
import C from "@/components/mui-inputs/button/TextButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/TextButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TextButtons: Story = {
  args: {},
};
