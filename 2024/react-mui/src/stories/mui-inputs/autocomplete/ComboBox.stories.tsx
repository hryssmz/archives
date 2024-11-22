// stories/mui-inputs/autocomplete/ComboBox.stories.tsx
import C from "@/components/mui-inputs/autocomplete/ComboBox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/ComboBox",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ComboBox: Story = {
  args: {},
};
