// stories/mui-complex/navigation/MiniDrawer.stories.tsx
import C from "@/components/mui-navigation/drawer/MiniDrawer";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-complex/navigation/MiniDrawer",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const MiniDrawer: Story = {
  args: {},
};
