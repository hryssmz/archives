// stories/mui-inputs/rating/RatingSize.stories.tsx
import C from "@/components/mui-inputs/rating/RatingSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/RatingSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RatingSize: Story = {
  args: {},
};
