// stories/mui-inputs/select/NativeSelectDemo.stories.tsx
import C from "@/components/mui-inputs/select/NativeSelectDemo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/NativeSelectDemo",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const NativeSelectDemo: Story = {
  args: {},
};
