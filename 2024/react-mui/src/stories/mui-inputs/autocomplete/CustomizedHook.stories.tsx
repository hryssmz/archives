// stories/mui-inputs/autocomplete/CustomizedHook.stories.tsx
import C from "@/components/mui-inputs/autocomplete/CustomizedHook";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/CustomizedHook",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedHook: Story = {
  args: {},
};
