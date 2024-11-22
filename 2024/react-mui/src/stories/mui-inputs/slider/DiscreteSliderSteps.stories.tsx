// stories/mui-inputs/slider/DiscreteSliderSteps.stories.tsx
import C from "@/components/mui-inputs/slider/DiscreteSliderSteps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/slider/DiscreteSliderSteps",
  component: C,
  decorators: (Story, { args }) => (
    <div style={{ marginTop: "5%" }}>
      <Story {...args} />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof C>;

export const DiscreteSliderSteps: Story = {
  args: {},
};
