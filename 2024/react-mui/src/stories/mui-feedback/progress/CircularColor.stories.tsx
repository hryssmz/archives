// stories/mui-feedback/progress/CircularColor.stories.tsx
import C from "@/components/mui-feedback/progress/CircularColor";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/CircularColor",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CircularColor: Story = {
  args: {},
};
