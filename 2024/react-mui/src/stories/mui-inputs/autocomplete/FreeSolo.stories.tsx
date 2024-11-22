// stories/mui-inputs/autocomplete/FreeSolo.stories.tsx
import C from "@/components/mui-inputs/autocomplete/FreeSolo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/FreeSolo",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FreeSolo: Story = {
  args: {},
};
