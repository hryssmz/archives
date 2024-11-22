// stories/mui-inputs/checkbox/CustomizedCheckbox.stories.tsx
import C from "@/components/mui-inputs/checkbox/CustomizedCheckbox";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/CustomizedCheckbox",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedCheckbox: Story = {
  args: {},
};
