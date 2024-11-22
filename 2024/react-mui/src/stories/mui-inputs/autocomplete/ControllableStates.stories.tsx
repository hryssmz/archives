// stories/mui-inputs/autocomplete/ControllableStates.stories.tsx
import C from "@/components/mui-inputs/autocomplete/ControllableStates";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/ControllableStates",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControllableStates: Story = {
  args: {},
};
