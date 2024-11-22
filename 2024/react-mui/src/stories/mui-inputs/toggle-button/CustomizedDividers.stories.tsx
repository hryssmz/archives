// stories/mui-inputs/toggle-button/CustomizedDividers.stories.tsx
import C from "@/components/mui-inputs/toggle-button/CustomizedDividers";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/toggle-button/CustomizedDividers",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomizedDividers: Story = {
  args: {},
};
