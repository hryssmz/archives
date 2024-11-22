// stories/mui-surface/app-bar/EnableColorOnDarkAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/EnableColorOnDarkAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/EnableColorOnDarkAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const EnableColorOnDarkAppBar: Story = {
  args: {},
};
