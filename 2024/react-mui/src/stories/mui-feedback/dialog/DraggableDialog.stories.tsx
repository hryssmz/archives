// stories/mui-feedback/dialog/DraggableDialog.stories.tsx
import C from "@/components/mui-feedback/dialog/DraggableDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/DraggableDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DraggableDialog: Story = {
  args: {},
};
