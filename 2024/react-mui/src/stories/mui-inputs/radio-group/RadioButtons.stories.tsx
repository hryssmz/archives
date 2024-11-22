// stories/mui-inputs/radio-group/RadioButtons.stories.tsx
import C from "@/components/mui-inputs/radio-group/RadioButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/RadioButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RadioButtons: Story = {
  args: {},
};
