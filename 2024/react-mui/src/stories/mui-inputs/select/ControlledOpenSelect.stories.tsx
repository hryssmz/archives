// stories/mui-inputs/select/ControlledOpenSelect.stories.tsx
import C from "@/components/mui-inputs/select/ControlledOpenSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/ControlledOpenSelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledOpenSelect: Story = {
  args: {},
};
