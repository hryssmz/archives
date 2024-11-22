// stories/mui-inputs/select/SelectVariants.stories.tsx
import C from "@/components/mui-inputs/select/SelectVariants";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/SelectVariants",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectVariants: Story = {
  args: {},
};
