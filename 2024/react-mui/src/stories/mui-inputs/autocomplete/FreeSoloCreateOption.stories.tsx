// stories/mui-inputs/autocomplete/FreeSoloCreateOption.stories.tsx
import C from "@/components/mui-inputs/autocomplete/FreeSoloCreateOption";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/FreeSoloCreateOption",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FreeSoloCreateOption: Story = {
  args: {},
};
