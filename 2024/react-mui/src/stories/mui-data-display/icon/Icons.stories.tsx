// stories/mui-data-display/icon/Icons.stories.tsx
import C from "@/components/mui-data-display/icon/Icons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/Icons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Icons: Story = {
  args: {},
};
