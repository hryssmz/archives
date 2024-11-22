// stories/mui-examples/complex-components/LoadingButtonsTransition.stories.tsx
import C from "@/components/mui-inputs/button/LoadingButtonsTransition";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-examples/complex-components/LoadingButtonsTransition",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const LoadingButtonsTransition: Story = {
  args: {},
};
