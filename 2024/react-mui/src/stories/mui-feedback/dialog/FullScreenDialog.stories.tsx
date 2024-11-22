// stories/mui-feedback/dialog/FullScreenDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/FullScreenDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/FullScreenDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FullScreenDialog: Story = {
  args: {},
};
