// stories/mui-inputs/slider/VerticalSlider.stories.tsx
import C from "@/components/mui-inputs/slider/VerticalSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/VerticalSlider",
  component: C,
  decorators: (Story, { args }) => (
    <div style={{ marginLeft: "5%" }}>
      <Story {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalSlider: Story = {
  args: {},
};
