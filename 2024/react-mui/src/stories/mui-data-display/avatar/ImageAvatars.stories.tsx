// stories/mui-data-display/avatar/ImageAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/ImageAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/ImageAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ImageAvatars: Story = {
  args: {},
};
