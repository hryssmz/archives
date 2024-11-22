// stories/mui-inputs/autocomplete/Filter.stories.tsx
import C from "@/components/mui-inputs/autocomplete/Filter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/Filter",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Filter: Story = {
  args: {},
};
