// stories/mui-feedback/snackbar/TransitionsSnackbar.stories.tsx
import C from "@/components/mui-feedback/snackbar/TransitionsSnackbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/TransitionsSnackbar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TransitionsSnackbar: Story = {
  args: {},
};
