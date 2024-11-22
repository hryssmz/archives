// stories/mui-inputs/autocomplete/Playground.stories.tsx
import C from "@/components/mui-inputs/autocomplete/Playground";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/Playground",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Playground: Story = {
  args: {},
};
