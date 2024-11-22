// stories/mui-inputs/text-field/InputWithIcon.stories.tsx
import C from "@/components/mui-inputs/text-field/InputWithIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/InputWithIcon",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InputWithIcon: Story = {
  args: {},
};
