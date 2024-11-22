// stories/mui-inputs/text-field/Inputs.stories.tsx
import C from "@/components/mui-inputs/text-field/Inputs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/text-field/Inputs",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Inputs: Story = {
  args: {},
};
