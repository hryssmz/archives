// stories/mui-inputs/select/CustomizedSelects.stories.tsx
import C from "@/components/mui-inputs/select/CustomizedSelects";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/CustomizedSelects",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedSelects: Story = {
  args: {},
};
