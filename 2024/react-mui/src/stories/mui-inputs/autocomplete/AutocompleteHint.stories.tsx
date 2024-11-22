// stories/mui-inputs/autocomplete/AutocompleteHint.stories.tsx
import C from "@/components/mui-inputs/autocomplete/AutocompleteHint";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/AutocompleteHint",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AutocompleteHint: Story = {
  args: {},
};
