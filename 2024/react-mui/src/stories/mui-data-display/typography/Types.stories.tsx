// stories/mui-data-display/typography/Types.stories.tsx
import C from "@/components/mui-data-display/typography/Types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/typography/Types",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Types: Story = {
  args: {},
};
