// stories/mui-feedback/snackbar/PositionedSnackbar.stories.tsx
import C from "@/components/mui-feedback/snackbar/PositionedSnackbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/PositionedSnackbar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const PositionedSnackbar: Story = {
  args: {},
};
