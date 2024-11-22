// stories/mui-data-display/icon/FontAwesomeSvgIconDemo.stories.tsx
import C from "@/components/mui-data-display/icon/FontAwesomeSvgIconDemo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/icon/FontAwesomeSvgIconDemo",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FontAwesomeSvgIconDemo: Story = {
  args: {},
};
