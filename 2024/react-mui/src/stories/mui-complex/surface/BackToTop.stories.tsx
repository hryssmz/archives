// stories/mui-complex/surface/BackToTop.stories.tsx
import C from "@/components/mui-surface/app-bar/BackToTop";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/surface/BackToTop",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BackToTop: Story = {
  args: {},
};
