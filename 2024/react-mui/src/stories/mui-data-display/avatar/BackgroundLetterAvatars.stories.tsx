// stories/mui-data-display/avatar/BackgroundLetterAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/BackgroundLetterAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/BackgroundLetterAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BackgroundLetterAvatars: Story = {
  args: {},
};
