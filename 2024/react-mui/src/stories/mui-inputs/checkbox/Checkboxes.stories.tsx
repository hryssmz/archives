// stories/mui-inputs/checkbox/Checkboxes.stories.tsx
import C from "@/components/mui-inputs/checkbox/Checkboxes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/Checkboxes",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Checkboxes: Story = {
  args: {},
};
