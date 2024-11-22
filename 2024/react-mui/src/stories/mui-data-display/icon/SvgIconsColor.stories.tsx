// stories/mui-data-display/icon/SvgIconsColor.stories.tsx
import C from "@/components/mui-data-display/icon/SvgIconsColor";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/SvgIconsColor",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SvgIconsColor: Story = {
  args: {},
};
