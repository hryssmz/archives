// stories/mui-inputs/autocomplete/CountrySelect.stories.tsx
import C from "@/components/mui-inputs/autocomplete/CountrySelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/CountrySelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CountrySelect: Story = {
  args: {},
};
