// stories/mui-surface/card/MultiActionAreaCard.stories.tsx
import C from "@/components/mui-surface/card/MultiActionAreaCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/card/MultiActionAreaCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MultiActionAreaCard: Story = {
  args: {},
};
