// stories/mui-inputs/checkbox/CheckboxLabels.stories.tsx
import C from "@/components/mui-inputs/checkbox/CheckboxLabels";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/CheckboxLabels",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CheckboxLabels: Story = {
  args: {},
};
