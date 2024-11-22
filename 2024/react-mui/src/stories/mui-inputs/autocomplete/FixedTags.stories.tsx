// stories/mui-inputs/autocomplete/FixedTags.stories.tsx
import C from "@/components/mui-inputs/autocomplete/FixedTags";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/FixedTags",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FixedTags: Story = {
  args: {},
};
