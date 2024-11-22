// stories/mui-inputs/radio-group/ErrorRadios.stories.tsx
import C from "@/components/mui-inputs/radio-group/ErrorRadios";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/ErrorRadios",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ErrorRadios: Story = {
  args: {},
};
