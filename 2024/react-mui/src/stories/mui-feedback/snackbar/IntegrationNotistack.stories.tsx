// stories/mui-feedback/snackbar/IntegrationNotistack.stories.tsx
import C from "@/components/mui-feedback/snackbar/IntegrationNotistack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/snackbar/IntegrationNotistack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IntegrationNotistack: Story = {
  args: {},
};
