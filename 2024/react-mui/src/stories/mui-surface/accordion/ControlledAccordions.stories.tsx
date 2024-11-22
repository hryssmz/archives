// stories/mui-surface/accordion/ControlledAccordions.stories.tsx
import C from "@/components/mui-surface/accordion/ControlledAccordions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/accordion/ControlledAccordions",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ControlledAccordions: Story = {
  args: {},
};
