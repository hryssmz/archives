// stories/mui-feedback/snackbar/ConsecutiveSnackbars.stories.tsx
import C from "@/components/mui-feedback/snackbar/ConsecutiveSnackbars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/ConsecutiveSnackbars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ConsecutiveSnackbars: Story = {
  args: {},
};
