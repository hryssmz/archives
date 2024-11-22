// stories/mui-data-display/avatar/CustomSurplusAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/CustomSurplusAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/CustomSurplusAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomSurplusAvatars: Story = {
  args: {},
};
