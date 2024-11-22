// stories/mui-feedback/snackbar/FabIntegrationSnackbar.stories.tsx
import C from "@/components/mui-feedback/snackbar/FabIntegrationSnackbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/FabIntegrationSnackbar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FabIntegrationSnackbar: Story = {
  args: {},
};
