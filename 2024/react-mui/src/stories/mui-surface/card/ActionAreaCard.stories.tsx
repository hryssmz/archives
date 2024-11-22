// stories/mui-surface/card/ActionAreaCard.stories.tsx
import C from "@/components/mui-surface/card/ActionAreaCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/card/ActionAreaCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ActionAreaCard: Story = {
  args: {},
};
