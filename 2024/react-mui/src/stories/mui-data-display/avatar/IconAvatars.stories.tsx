// stories/mui-data-display/avatar/IconAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/IconAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/IconAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const IconAvatars: Story = {
  args: {},
};
