// stories/mui-inputs/text-field/InputAdornments.stories.tsx
import C from "@/components/mui-inputs/text-field/InputAdornments";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/InputAdornments",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const InputAdornments: Story = {
  args: {},
};
