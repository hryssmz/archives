// stories/mui-surface/card/MediaCard.stories.tsx
import C from "@/components/mui-surface/card/MediaCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/card/MediaCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MediaCard: Story = {
  args: {},
};
