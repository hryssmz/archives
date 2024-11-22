// stories/mui-inputs/slider/DiscreteSliderValues.stories.tsx
import C from "@/components/mui-inputs/slider/DiscreteSliderValues";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/DiscreteSliderValues",
  component: C,
  decorators: (Story, { args }) => (
    <div style={{ marginTop: "5%" }}>
      <Story {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof C>;

export const DiscreteSliderValues: Story = {
  args: {},
};
