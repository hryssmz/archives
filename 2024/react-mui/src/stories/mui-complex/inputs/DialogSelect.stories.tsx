// stories/mui-complex/inputs/DialogSelect.stories.tsx
import C from "@/components/mui-inputs/select/DialogSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/DialogSelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DialogSelect: Story = {
  args: {},
};
