// stories/mui-inputs/autocomplete/UseAutocomplete.stories.tsx
import C from "@/components/mui-inputs/autocomplete/UseAutocomplete";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/UseAutocomplete",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const UseAutocomplete: Story = {
  args: {},
};
