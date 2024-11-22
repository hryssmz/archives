// stories/mui-complex/surface/SearchAppBar.stories.tsx
import C from "@/components/mui-surface/app-bar/SearchAppBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/SearchAppBar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SearchAppBar: Story = {
  args: {},
};
