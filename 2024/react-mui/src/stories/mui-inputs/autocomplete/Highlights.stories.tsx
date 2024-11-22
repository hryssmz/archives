// stories/mui-inputs/autocomplete/Highlights.stories.tsx
import C from "@/components/mui-inputs/autocomplete/Highlights";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/Highlights",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Highlights: Story = {
  args: {},
};
