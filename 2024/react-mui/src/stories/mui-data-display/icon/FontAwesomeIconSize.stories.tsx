// stories/mui-data-display/icon/FontAwesomeIconSize.stories.tsx
import C from "@/components/mui-data-display/icon/FontAwesomeIconSize";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/FontAwesomeIconSize",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FontAwesomeIconSize: Story = {
  args: {},
};
