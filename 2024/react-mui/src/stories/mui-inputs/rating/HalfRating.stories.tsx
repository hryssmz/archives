// stories/mui-inputs/rating/HalfRating.stories.tsx
import C from "@/components/mui-inputs/rating/HalfRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/HalfRating",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const HalfRating: Story = {
  args: {},
};
