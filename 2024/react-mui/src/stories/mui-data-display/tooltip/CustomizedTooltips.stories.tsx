// stories/mui-data-display/tooltip/CustomizedTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/CustomizedTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/CustomizedTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedTooltips: Story = {
  args: {},
};
