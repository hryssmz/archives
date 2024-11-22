// stories/mui-complex/feedback/ConfirmationDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/ConfirmationDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/feedback/ConfirmationDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ConfirmationDialog: Story = {
  args: {},
};
