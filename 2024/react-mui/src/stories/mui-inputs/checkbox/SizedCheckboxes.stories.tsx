// stories/mui-inputs/checkbox/SizedCheckboxes.stories.tsx
import C from "@/components/mui-inputs/checkbox/SizedCheckboxes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/SizedCheckboxes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SizedCheckboxes: Story = {
  args: {},
};
