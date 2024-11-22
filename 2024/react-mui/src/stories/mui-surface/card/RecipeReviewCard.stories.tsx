// stories/mui-surface/card/RecipeReviewCard.stories.tsx
import C from "@/components/mui-surface/card/RecipeReviewCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/card/RecipeReviewCard",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RecipeReviewCard: Story = {
  args: {},
};
