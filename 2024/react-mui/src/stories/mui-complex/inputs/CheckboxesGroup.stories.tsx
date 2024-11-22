// stories/mui-complex/inputs/CheckboxesGroup.stories.tsx
import C from "@/components/mui-inputs/checkbox/CheckboxesGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/inputs/CheckboxesGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CheckboxesGroup: Story = {
  args: {},
};
