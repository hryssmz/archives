// stories/mui-inputs/button-group/GroupOrientation.stories.tsx
import C from "@/components/mui-inputs/button-group/GroupOrientation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/GroupOrientation",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GroupOrientation: Story = {
  args: {},
};
