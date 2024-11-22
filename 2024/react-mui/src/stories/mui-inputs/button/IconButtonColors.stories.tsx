// stories/mui-inputs/button/IconButtonColors.stories.tsx
import C from "@/components/mui-inputs/button/IconButtonColors";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/IconButtonColors",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconButtonColors: Story = {
  args: {},
};
