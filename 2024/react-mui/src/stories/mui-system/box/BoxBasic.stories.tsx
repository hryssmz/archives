// stories/mui-system/box/BoxBasic.stories.tsx
import C from "@/components/mui-system/box/BoxBasic";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-system/box/BoxBasic",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BoxBasic: Story = {
  args: {},
};
