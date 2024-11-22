// stories/mui-data-display/icon/FontAwesomeIcon.stories.tsx
import C from "@/components/mui-data-display/icon/FontAwesomeIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/FontAwesomeIcon",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FontAwesomeIcon: Story = {
  args: {},
};
