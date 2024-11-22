// stories/mui-inputs/button/CustomizedButtons.stories.tsx
import C from "@/components/mui-inputs/button/CustomizedButtons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/CustomizedButtons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedButtons: Story = {
  args: {},
};
