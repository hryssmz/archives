// stories/mui-data-display/avatar/TotalAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/TotalAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/TotalAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TotalAvatars: Story = {
  args: {},
};
