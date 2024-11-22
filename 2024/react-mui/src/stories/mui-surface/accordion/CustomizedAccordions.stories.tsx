// stories/mui-surface/accordion/CustomizedAccordions.stories.tsx
import C from "@/components/mui-surface/accordion/CustomizedAccordions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/accordion/CustomizedAccordions",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedAccordions: Story = {
  args: {},
};
