// stories/mui-inputs/button-group/DisableElevation.stories.tsx
import C from "@/components/mui-inputs/button-group/DisableElevation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/DisableElevation",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DisableElevation: Story = {
  args: {},
};
