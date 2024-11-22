// stories/mui-data-display/avatar/FallbackAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/FallbackAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/FallbackAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FallbackAvatars: Story = {
  args: {},
};
