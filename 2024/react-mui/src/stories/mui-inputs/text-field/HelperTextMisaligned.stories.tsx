// stories/mui-inputs/text-field/HelperTextMisaligned.stories.tsx
import C from "@/components/mui-inputs/text-field/HelperTextMisaligned";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/HelperTextMisaligned",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HelperTextMisaligned: Story = {
  args: {},
};
