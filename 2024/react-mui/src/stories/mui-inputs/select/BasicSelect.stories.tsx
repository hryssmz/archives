// stories/mui-inputs/select/BasicSelect.stories.tsx
import C from "@/components/mui-inputs/select/BasicSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/BasicSelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicSelect: Story = {
  args: {},
};
