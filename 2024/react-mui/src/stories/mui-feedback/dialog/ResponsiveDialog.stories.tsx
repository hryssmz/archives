// stories/mui-feedback/dialog/ResponsiveDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/ResponsiveDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/ResponsiveDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ResponsiveDialog: Story = {
  args: {},
};
