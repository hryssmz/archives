// stories/mui-system/box/BoxSx.stories.tsx
import C from "@/components/mui-system/box/BoxSx";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-system/box/BoxSx",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BoxSx: Story = {
  args: {},
};
