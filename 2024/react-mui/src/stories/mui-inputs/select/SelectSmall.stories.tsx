// stories/mui-inputs/select/SelectSmall.stories.tsx
import C from "@/components/mui-inputs/select/SelectSmall";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/SelectSmall",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectSmall: Story = {
  args: {},
};
