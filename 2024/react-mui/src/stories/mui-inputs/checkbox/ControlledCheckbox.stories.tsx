// stories/mui-inputs/checkbox/ControlledCheckbox.stories.tsx
import C from "@/components/mui-inputs/checkbox/ControlledCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/ControlledCheckbox",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledCheckbox: Story = {
  args: {},
};
