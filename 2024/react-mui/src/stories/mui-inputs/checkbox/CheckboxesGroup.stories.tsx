// stories/mui-inputs/checkbox/CheckboxesGroup.stories.tsx
import C from "@/components/mui-inputs/checkbox/CheckboxesGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/checkbox/CheckboxesGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CheckboxesGroup: Story = {
  args: {},
};
