// stories/mui-feedback/snackbar/SimpleSnackbar.stories.tsx
import C from "@/components/mui-feedback/snackbar/SimpleSnackbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/SimpleSnackbar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimpleSnackbar: Story = {
  args: {},
};
