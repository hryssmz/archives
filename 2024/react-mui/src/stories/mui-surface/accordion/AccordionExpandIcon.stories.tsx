// stories/mui-surface/accordion/AccordionExpandIcon.stories.tsx
import C from "@/components/mui-surface/accordion/AccordionExpandIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/accordion/AccordionExpandIcon",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AccordionExpandIcon: Story = {
  args: {},
};
