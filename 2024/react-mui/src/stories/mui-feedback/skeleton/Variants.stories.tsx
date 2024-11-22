// stories/mui-feedback/skeleton/Variants.stories.tsx
import C from "@/components/mui-feedback/skeleton/Variants";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/skeleton/Variants",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Variants: Story = {
  args: {},
};
