// stories/mui-inputs/checkbox/IndeterminateCheckbox.stories.tsx
import C from "@/components/mui-inputs/checkbox/IndeterminateCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/IndeterminateCheckbox",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IndeterminateCheckbox: Story = {
  args: {},
};
