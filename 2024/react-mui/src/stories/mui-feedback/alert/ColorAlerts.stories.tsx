// stories/mui-feedback/alert/ColorAlerts.stories.tsx
import C from "@/components/mui-feedback/alert/ColorAlerts";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-feedback/alert/ColorAlerts",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const ColorAlerts: Story = {
  args: {},
};
