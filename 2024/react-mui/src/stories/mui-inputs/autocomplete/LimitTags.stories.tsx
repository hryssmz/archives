// stories/mui-inputs/autocomplete/LimitTags.stories.tsx
import C from "@/components/mui-inputs/autocomplete/LimitTags";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/LimitTags",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LimitTags: Story = {
  args: {},
};
