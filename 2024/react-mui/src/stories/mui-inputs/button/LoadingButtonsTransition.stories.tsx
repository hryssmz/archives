// stories/mui-inputs/button/LoadingButtonsTransition.stories.tsx
import C from "@/components/mui-inputs/button/LoadingButtonsTransition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button/LoadingButtonsTransition",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LoadingButtonsTransition: Story = {
  args: {},
};
