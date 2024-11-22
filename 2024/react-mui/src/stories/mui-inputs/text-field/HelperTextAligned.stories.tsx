// stories/mui-inputs/text-field/HelperTextAligned.stories.tsx
import C from "@/components/mui-inputs/text-field/HelperTextAligned";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/HelperTextAligned",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HelperTextAligned: Story = {
  args: {},
};
