// stories/mui-inputs/select/SelectAutoWidth.stories.tsx
import C from "@/components/mui-inputs/select/SelectAutoWidth";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/SelectAutoWidth",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const SelectAutoWidth: Story = {
  args: {},
};
