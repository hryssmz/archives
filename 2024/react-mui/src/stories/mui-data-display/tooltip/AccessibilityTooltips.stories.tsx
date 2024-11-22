// stories/mui-data-display/tooltip/AccessibilityTooltips.stories.tsx
import C from "@/components/mui-data-display/tooltip/AccessibilityTooltips";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/tooltip/AccessibilityTooltips",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccessibilityTooltips: Story = {
  args: {},
};
