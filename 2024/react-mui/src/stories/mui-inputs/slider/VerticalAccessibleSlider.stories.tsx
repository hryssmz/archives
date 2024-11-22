// stories/mui-inputs/slider/VerticalAccessibleSlider.stories.tsx
import C from "@/components/mui-inputs/slider/VerticalAccessibleSlider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/VerticalAccessibleSlider",
  component: C,
  decorators: (Story, { args }) => (
    <div style={{ marginLeft: "5%" }}>
      <Story {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof C>;

export const VerticalAccessibleSlider: Story = {
  args: {},
};
