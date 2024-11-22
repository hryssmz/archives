// stories/mui-surface/accordion/DisabledAccordion.stories.tsx
import C from "@/components/mui-surface/accordion/DisabledAccordion";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/accordion/DisabledAccordion",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DisabledAccordion: Story = {
  args: {},
};
