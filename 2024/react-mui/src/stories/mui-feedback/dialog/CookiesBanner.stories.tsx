// stories/mui-feedback/dialog/CookiesBanner.stories.tsx
import C from "@/components/mui-feedback/dialog/CookiesBanner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/dialog/CookiesBanner",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CookiesBanner: Story = {
  args: {},
};
