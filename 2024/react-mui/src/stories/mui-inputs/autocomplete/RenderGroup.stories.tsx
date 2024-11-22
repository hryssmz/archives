// stories/mui-inputs/autocomplete/RenderGroup.stories.tsx
import C from "@/components/mui-inputs/autocomplete/RenderGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/RenderGroup",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const RenderGroup: Story = {
  args: {},
};
