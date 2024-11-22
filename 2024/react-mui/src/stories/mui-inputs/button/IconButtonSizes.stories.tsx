// stories/mui-inputs/button/IconButtonSizes.stories.tsx
import C from "@/components/mui-inputs/button/IconButtonSizes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/IconButtonSizes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconButtonSizes: Story = {
  args: {},
};
