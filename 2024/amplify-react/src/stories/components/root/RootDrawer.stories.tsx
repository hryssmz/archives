// stories/components/root/RootDrawer.stories.tsx
import RootDrawer from "@/components/root/RootDrawer";
import type { Meta, StoryObj } from "@storybook/react";
import type { RootDrawerProps } from "@/components/root/RootDrawer";

const meta: Meta<typeof RootDrawer> = {
  title: "components/root/RootDrawer",
  component: RootDrawer,
};

export default meta;

type Story = StoryObj<typeof RootDrawer>;

const defaultArgs: RootDrawerProps = {
  open: true,
  handleClose() {
    alert("Drawer closed!");
  },
};

export const Default: Story = {
  args: { ...defaultArgs },
};
