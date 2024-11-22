// stories/mui-navigation/link/Links.stories.tsx
import C from "@/components/mui-navigation/link/Links";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/link/Links",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Links: Story = {
  args: {},
};
