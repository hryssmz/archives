// stories/mui-feedback/skeleton/Animations.stories.tsx
import C from "@/components/mui-feedback/skeleton/Animations";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/Animations",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Animations: Story = {
  args: {},
};
