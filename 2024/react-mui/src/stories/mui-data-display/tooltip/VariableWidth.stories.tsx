// stories/mui-data-display/tooltip/VariableWidth.stories.tsx
import C from "@/components/mui-data-display/tooltip/VariableWidth";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/VariableWidth",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VariableWidth: Story = {
  args: {},
};
