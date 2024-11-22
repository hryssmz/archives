// stories/mui-data-display/list/GutterlessList.stories.tsx
import C from "@/components/mui-data-display/list/GutterlessList";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/list/GutterlessList",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GutterlessList: Story = {
  args: {},
};
