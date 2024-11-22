// stories/mui-inputs/checkbox/FormControlLabelPosition.stories.tsx
import C from "@/components/mui-inputs/checkbox/FormControlLabelPosition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/FormControlLabelPosition",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FormControlLabelPosition: Story = {
  args: {},
};
