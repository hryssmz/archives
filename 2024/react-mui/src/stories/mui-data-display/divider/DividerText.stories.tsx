// stories/mui-data-display/divider/DividerText.stories.tsx
import C from "@/components/mui-data-display/divider/DividerText";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/divider/DividerText",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DividerText: Story = {
  args: {},
};
