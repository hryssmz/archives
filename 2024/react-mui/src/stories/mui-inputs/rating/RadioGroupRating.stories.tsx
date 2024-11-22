// stories/mui-inputs/rating/RadioGroupRating.stories.tsx
import C from "@/components/mui-inputs/rating/RadioGroupRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/RadioGroupRating",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RadioGroupRating: Story = {
  args: {},
};
