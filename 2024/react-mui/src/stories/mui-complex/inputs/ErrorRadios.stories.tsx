// stories/mui-complex/inputs/ErrorRadios.stories.tsx
import C from "@/components/mui-inputs/radio-group/ErrorRadios";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/ErrorRadios",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ErrorRadios: Story = {
  args: {},
};
