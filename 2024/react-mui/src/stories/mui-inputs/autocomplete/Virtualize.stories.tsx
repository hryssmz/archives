// stories/mui-inputs/autocomplete/Virtualize.stories.tsx
import C from "@/components/mui-inputs/autocomplete/Virtualize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/Virtualize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Virtualize: Story = {
  args: {},
};
