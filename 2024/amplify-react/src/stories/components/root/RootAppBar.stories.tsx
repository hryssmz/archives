// stories/components/root/RootAppBar.stories.tsx
import RootAppBar from "@/components/root/RootAppBar";
import type { Meta, StoryObj } from "@storybook/react";
import type { RootAppBarProps } from "@/components/root/RootAppBar";

const meta: Meta<typeof RootAppBar> = {
  title: "components/root/RootAppBar",
  component: RootAppBar,
};

export default meta;

type Story = StoryObj<typeof RootAppBar>;

const defaultArgs: RootAppBarProps = {
  handleClick() {
    alert("Menu icon clicked!");
  },
  username: "hryssmz",
};

export const Default: Story = {
  args: { ...defaultArgs },
};

export const Unauthenticated: Story = {
  args: { ...defaultArgs, username: undefined },
};
