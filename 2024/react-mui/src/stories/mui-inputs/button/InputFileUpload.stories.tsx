// stories/mui-inputs/button/InputFileUpload.stories.tsx
import C from "@/components/mui-inputs/button/InputFileUpload";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/InputFileUpload",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InputFileUpload: Story = {
  args: {},
};
