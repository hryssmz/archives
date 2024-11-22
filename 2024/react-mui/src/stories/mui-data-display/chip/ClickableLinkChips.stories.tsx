// stories/mui-data-display/chip/ClickableLinkChips.stories.tsx
import C from "@/components/mui-data-display/chip/ClickableLinkChips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/chip/ClickableLinkChips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ClickableLinkChips: Story = {
  args: {},
};
