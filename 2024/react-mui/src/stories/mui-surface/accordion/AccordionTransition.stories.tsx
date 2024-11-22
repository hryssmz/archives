// stories/mui-surface/accordion/AccordionTransition.stories.tsx
import C from "@/components/mui-surface/accordion/AccordionTransition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/accordion/AccordionTransition",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccordionTransition: Story = {
  args: {},
};
