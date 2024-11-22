// stories/mui-inputs/rating/HoverRating.stories.tsx
import C from "@/components/mui-inputs/rating/HoverRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/HoverRating",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HoverRating: Story = {
  args: {},
};
