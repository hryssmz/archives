// stories/mui-feedback/snackbar/LongTextSnackbar.stories.tsx
import C from "@/components/mui-feedback/snackbar/LongTextSnackbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/LongTextSnackbar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LongTextSnackbar: Story = {
  args: {},
};
