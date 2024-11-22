// stories/mui-inputs/autocomplete/Asynchronous.stories.tsx
import C from "@/components/mui-inputs/autocomplete/Asynchronous";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/Asynchronous",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Asynchronous: Story = {
  args: {},
};
