// stories/mui-data-display/avatar/GroupAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/GroupAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/GroupAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GroupAvatars: Story = {
  args: {},
};
