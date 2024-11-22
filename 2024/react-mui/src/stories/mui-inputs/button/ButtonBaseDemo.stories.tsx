// stories/mui-inputs/button/ButtonBaseDemo.stories.tsx
import C from "@/components/mui-inputs/button/ButtonBaseDemo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/ButtonBaseDemo",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ButtonBaseDemo: Story = {
  args: {},
};
