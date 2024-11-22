// stories/mui-inputs/autocomplete/GoogleMaps.stories.tsx
import C from "@/components/mui-inputs/autocomplete/GoogleMaps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/GoogleMaps",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GoogleMaps: Story = {
  args: {},
};
