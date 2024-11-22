// stories/mui-surface/paper/Variants.stories.tsx
import C from "@/components/mui-surface/paper/Variants";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/paper/Variants",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Variants: Story = {
  args: {},
};
