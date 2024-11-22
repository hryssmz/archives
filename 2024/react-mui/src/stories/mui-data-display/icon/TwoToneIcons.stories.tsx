// stories/mui-data-display/icon/TwoToneIcons.stories.tsx
import C from "@/components/mui-data-display/icon/TwoToneIcons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/TwoToneIcons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TwoToneIcons: Story = {
  args: {},
};
