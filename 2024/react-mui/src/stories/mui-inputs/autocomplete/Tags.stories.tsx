// stories/mui-inputs/autocomplete/Tags.stories.tsx
import C from "@/components/mui-inputs/autocomplete/Tags";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/Tags",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Tags: Story = {
  args: {},
};
