// stories/mui-complex/feedback/FullScreenDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/FullScreenDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/feedback/FullScreenDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FullScreenDialog: Story = {
  args: {},
};
