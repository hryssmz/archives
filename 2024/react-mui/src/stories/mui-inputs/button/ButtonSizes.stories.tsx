// stories/mui-inputs/button/ButtonSizes.stories.tsx
import C from "@/components/mui-inputs/button/ButtonSizes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/ButtonSizes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ButtonSizes: Story = {
  args: {},
};
