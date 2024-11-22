// stories/mui-complex/surface/MediaControlCard.stories.tsx
import C from "@/components/mui-surface/card/MediaControlCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/MediaControlCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MediaControlCard: Story = {
  args: {},
};
