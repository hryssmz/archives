// stories/mui-data-display/divider/VerticalDividerText.stories.tsx
import C from "@/components/mui-data-display/divider/VerticalDividerText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/VerticalDividerText",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalDividerText: Story = {
  args: {},
};
