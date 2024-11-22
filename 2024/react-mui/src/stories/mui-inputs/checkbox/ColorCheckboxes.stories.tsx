// stories/mui-inputs/checkbox/ColorCheckboxes.stories.tsx
import C from "@/components/mui-inputs/checkbox/ColorCheckboxes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/ColorCheckboxes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorCheckboxes: Story = {
  args: {},
};
