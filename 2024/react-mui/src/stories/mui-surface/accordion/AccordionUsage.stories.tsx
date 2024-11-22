// stories/mui-surface/accordion/AccordionUsage.stories.tsx
import C from "@/components/mui-surface/accordion/AccordionUsage";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/accordion/AccordionUsage",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccordionUsage: Story = {
  args: {},
};
