// stories/mui-inputs/select/SelectOtherProps.stories.tsx
import C from "@/components/mui-inputs/select/SelectOtherProps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/SelectOtherProps",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectOtherProps: Story = {
  args: {},
};
