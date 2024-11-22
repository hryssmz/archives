// stories/mui-inputs/autocomplete/GloballyCustomizedOptions.stories.tsx
import C from "@/components/mui-inputs/autocomplete/GloballyCustomizedOptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/GloballyCustomizedOptions",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GloballyCustomizedOptions: Story = {
  args: {},
};
