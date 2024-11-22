// stories/mui-layout/grid/AutoGridNoWrap.stories.tsx
import C from "@/components/mui-layout/grid/AutoGridNoWrap";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-layout/grid/AutoGridNoWrap",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AutoGridNoWrap: Story = {
  args: {},
};
