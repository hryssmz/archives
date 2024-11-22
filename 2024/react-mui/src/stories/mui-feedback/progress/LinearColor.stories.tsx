// stories/mui-feedback/progress/LinearColor.stories.tsx
import C from "@/components/mui-feedback/progress/LinearColor";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/progress/LinearColor",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LinearColor: Story = {
  args: {},
};
