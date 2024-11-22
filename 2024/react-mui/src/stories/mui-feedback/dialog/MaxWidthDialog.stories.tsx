// stories/mui-feedback/dialog/MaxWidthDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/MaxWidthDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/MaxWidthDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MaxWidthDialog: Story = {
  args: {},
};
