// stories/mui-feedback/snackbar/AutohideSnackbar.stories.tsx
import C from "@/components/mui-feedback/snackbar/AutohideSnackbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/AutohideSnackbar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AutohideSnackbar: Story = {
  args: {},
};
