// stories/mui-surface/app-bar/BackToTop.stories.tsx
import C from "@/components/mui-surface/app-bar/BackToTop";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-surface/app-bar/BackToTop",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BackToTop: Story = {
  args: {},
};
