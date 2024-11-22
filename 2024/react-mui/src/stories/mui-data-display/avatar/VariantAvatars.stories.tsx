// stories/mui-data-display/avatar/VariantAvatars.stories.tsx
import C from "@/components/mui-data-display/avatar/VariantAvatars";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/avatar/VariantAvatars",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const VariantAvatars: Story = {
  args: {},
};
