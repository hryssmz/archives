// stories/mui-data-display/icon/CreateSvgIcon.stories.tsx
import C from "@/components/mui-data-display/icon/CreateSvgIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/CreateSvgIcon",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CreateSvgIcon: Story = {
  args: {},
};
