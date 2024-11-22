// stories/mui-feedback/backdrop/SimpleBackdrop.stories.tsx
import C from "@/components/mui-feedback/backdrop/SimpleBackdrop";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/backdrop/SimpleBackdrop",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SimpleBackdrop: Story = {
  args: {},
};
