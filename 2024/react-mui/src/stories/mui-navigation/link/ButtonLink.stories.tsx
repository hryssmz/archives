// stories/mui-navigation/link/ButtonLink.stories.tsx
import C from "@/components/mui-navigation/link/ButtonLink";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/link/ButtonLink",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ButtonLink: Story = {
  args: {},
};
