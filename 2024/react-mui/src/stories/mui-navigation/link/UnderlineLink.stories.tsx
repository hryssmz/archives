// stories/mui-navigation/link/UnderlineLink.stories.tsx
import C from "@/components/mui-navigation/link/UnderlineLink";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/link/UnderlineLink",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const UnderlineLink: Story = {
  args: {},
};
