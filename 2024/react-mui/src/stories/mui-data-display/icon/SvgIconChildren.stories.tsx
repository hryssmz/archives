// stories/mui-data-display/icon/SvgIconChildren.stories.tsx
import C from "@/components/mui-data-display/icon/SvgIconChildren";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/SvgIconChildren",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SvgIconChildren: Story = {
  args: {},
};
