// stories/mui-feedback/dialog/BasicDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/BasicDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/BasicDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicDialog: Story = {
  args: {},
};
