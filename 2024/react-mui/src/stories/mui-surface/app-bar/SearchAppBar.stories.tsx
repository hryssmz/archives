// stories/mui-surface/app-bar/SearchAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/SearchAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/SearchAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SearchAppBar: Story = {
  args: {},
};
