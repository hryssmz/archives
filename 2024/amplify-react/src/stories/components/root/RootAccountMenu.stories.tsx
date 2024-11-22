// stories/components/root/RootAccountMenu.stories.tsx
import RootAccountMenu from "@/components/root/RootAccountMenu";
import type { Meta, StoryObj } from "@storybook/react";
import type { RootAccountMenuProps } from "@/components/root/RootAccountMenu";

const meta: Meta<typeof RootAccountMenu> = {
  title: "components/root/RootAccountMenu",
  component: RootAccountMenu,
};

export default meta;

type Story = StoryObj<typeof RootAccountMenu>;

const defaultArgs: RootAccountMenuProps = {
  username: "hryssmz",
};

export const Default: Story = {
  args: { ...defaultArgs },
};
