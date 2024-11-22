// stories/mui-inputs/radio-group/CustomizedRadios.stories.tsx
import C from "@/components/mui-inputs/radio-group/CustomizedRadios";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/radio-group/CustomizedRadios",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedRadios: Story = {
  args: {},
};
