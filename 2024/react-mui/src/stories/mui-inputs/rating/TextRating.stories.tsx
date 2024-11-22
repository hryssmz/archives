// stories/mui-inputs/rating/TextRating.stories.tsx
import C from "@/components/mui-inputs/rating/TextRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/TextRating",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TextRating: Story = {
  args: {},
};
