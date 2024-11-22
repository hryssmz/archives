// stories/mui-feedback/dialog/AlertDialogSlide.stories.tsx
import C from "@/components/mui-feedback/dialog/AlertDialogSlide";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/AlertDialogSlide",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AlertDialogSlide: Story = {
  args: {},
};
