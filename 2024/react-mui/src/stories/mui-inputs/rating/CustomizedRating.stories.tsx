// stories/mui-inputs/rating/CustomizedRating.stories.tsx
import C from "@/components/mui-inputs/rating/CustomizedRating";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/rating/CustomizedRating",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedRating: Story = {
  args: {},
};
