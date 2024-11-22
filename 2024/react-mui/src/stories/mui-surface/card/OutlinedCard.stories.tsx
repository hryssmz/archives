// stories/mui-surface/card/OutlinedCard.stories.tsx
import C from "@/components/mui-surface/card/OutlinedCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/card/OutlinedCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const OutlinedCard: Story = {
  args: {},
};
