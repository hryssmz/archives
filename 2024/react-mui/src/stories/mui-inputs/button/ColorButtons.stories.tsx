// stories/mui-inputs/button/ColorButtons.stories.tsx
import C from "@/components/mui-inputs/button/ColorButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/ColorButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorButtons: Story = {
  args: {},
};
