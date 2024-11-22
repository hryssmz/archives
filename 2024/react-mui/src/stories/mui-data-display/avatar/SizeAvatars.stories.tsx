// stories/mui-data-display/avatar/SizeAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/SizeAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/SizeAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SizeAvatars: Story = {
  args: {},
};
