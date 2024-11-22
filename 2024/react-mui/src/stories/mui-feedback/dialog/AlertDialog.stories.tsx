// stories/mui-feedback/dialog/AlertDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/AlertDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/AlertDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AlertDialog: Story = {
  args: {},
};
