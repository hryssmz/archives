// stories/mui-inputs/rating/BasicRating.stories.tsx
import C from "@/components/mui-inputs/rating/BasicRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/BasicRating",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicRating: Story = {
  args: {},
};
