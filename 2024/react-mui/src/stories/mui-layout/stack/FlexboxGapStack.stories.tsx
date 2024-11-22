// stories/mui-layout/stack/FlexboxGapStack.stories.tsx
import C from "@/components/mui-layout/stack/FlexboxGapStack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/stack/FlexboxGapStack",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FlexboxGapStack: Story = {
  args: {},
};
