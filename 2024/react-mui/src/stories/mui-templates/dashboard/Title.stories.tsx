// stories/mui-templates/dashboard/Title.stories.tsx
import C from "@/components/mui-templates/dashboard/Title";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-templates/dashboard/Title",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Title: Story = {
  args: {
    children: "Hello World!",
  },
};
