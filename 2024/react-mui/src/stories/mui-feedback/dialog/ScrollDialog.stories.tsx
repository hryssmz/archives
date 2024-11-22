// stories/mui-feedback/dialog/ScrollDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/ScrollDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/ScrollDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ScrollDialog: Story = {
  args: {},
};
