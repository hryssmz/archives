// stories/mui-data-display/avatar/LetterAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/LetterAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/LetterAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LetterAvatars: Story = {
  args: {},
};
