// stories/mui-data-display/icon/SvgMaterialIcons.stories.tsx
import C from "@/components/mui-data-display/icon/SvgMaterialIcons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/SvgMaterialIcons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SvgMaterialIcons: Story = {
  args: {},
};
