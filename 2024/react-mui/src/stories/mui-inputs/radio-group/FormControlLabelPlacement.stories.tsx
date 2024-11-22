// stories/mui-inputs/radio-group/FormControlLabelPlacement.stories.tsx
import C from "@/components/mui-inputs/radio-group/FormControlLabelPlacement";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/FormControlLabelPlacement",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FormControlLabelPlacement: Story = {
  args: {},
};
