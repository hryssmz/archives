// stories/mui-inputs/autocomplete/CheckboxesTags.stories.tsx
import C from "@/components/mui-inputs/autocomplete/CheckboxesTags";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/CheckboxesTags",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CheckboxesTags: Story = {
  args: {},
};
