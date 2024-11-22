// stories/mui-data-display/icon/SvgIconsSize.stories.tsx
import C from "@/components/mui-data-display/icon/SvgIconsSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/SvgIconsSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SvgIconsSize: Story = {
  args: {},
};
