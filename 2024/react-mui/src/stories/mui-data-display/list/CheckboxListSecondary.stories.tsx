// stories/mui-data-display/list/CheckboxListSecondary.stories.tsx
import C from "@/components/mui-data-display/list/CheckboxListSecondary";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/CheckboxListSecondary",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CheckboxListSecondary: Story = {
  args: {},
};
