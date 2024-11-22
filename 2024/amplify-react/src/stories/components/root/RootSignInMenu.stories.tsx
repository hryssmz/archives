// stories/components/root/RootSignInMenu.stories.tsx
import RootSignInMenu from "@/components/root/RootSignInMenu";
import type { Meta, StoryObj } from "@storybook/react";
import type { RootSignInMenuProps } from "@/components/root/RootSignInMenu";

const meta: Meta<typeof RootSignInMenu> = {
  title: "components/root/RootSignInMenu",
  component: RootSignInMenu,
};

export default meta;

type Story = StoryObj<typeof RootSignInMenu>;

const defaultArgs: RootSignInMenuProps = {
  
};

export const Default: Story = {
  args: { ...defaultArgs },
};
