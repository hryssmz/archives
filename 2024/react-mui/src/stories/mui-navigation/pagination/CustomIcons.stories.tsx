// stories/mui-navigation/pagination/CustomIcons.stories.tsx
import C from "@/components/mui-navigation/pagination/CustomIcons";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-navigation/pagination/CustomIcons",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomIcons: Story = {
  args: {},
};
