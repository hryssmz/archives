// stories/mui-complex/inputs/InputFileUpload.stories.tsx
import C from "@/components/mui-inputs/button/InputFileUpload";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/InputFileUpload",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InputFileUpload: Story = {
  args: {},
};
