// stories/mui-inputs/switch/FormControlLabelPosition.stories.tsx
import C from "@/components/mui-inputs/switch/FormControlLabelPosition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/switch/FormControlLabelPosition",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FormControlLabelPosition: Story = {
  args: {},
};
