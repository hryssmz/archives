// stories/mui-inputs/select/DialogSelect.stories.tsx
import C from "@/components/mui-inputs/select/DialogSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/DialogSelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DialogSelect: Story = {
  args: {},
};
