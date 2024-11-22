// stories/mui-feedback/snackbar/CustomizedSnackbars.stories.tsx
import C from "@/components/mui-feedback/snackbar/CustomizedSnackbars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/CustomizedSnackbars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedSnackbars: Story = {
  args: {},
};
