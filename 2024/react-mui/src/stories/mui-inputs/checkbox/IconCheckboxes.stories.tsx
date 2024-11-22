// stories/mui-inputs/checkbox/IconCheckboxes.stories.tsx
import C from "@/components/mui-inputs/checkbox/IconCheckboxes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/IconCheckboxes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconCheckboxes: Story = {
  args: {},
};
