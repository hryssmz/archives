// stories/mui-surface/card/BasicCard.stories.tsx
import C from "@/components/mui-surface/card/BasicCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/card/BasicCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicCard: Story = {
  args: {},
};
