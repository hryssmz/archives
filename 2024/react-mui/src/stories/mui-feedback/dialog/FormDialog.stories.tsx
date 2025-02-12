// stories/mui-feedback/dialog/FormDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/FormDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/FormDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FormDialog: Story = {
  args: {},
};
