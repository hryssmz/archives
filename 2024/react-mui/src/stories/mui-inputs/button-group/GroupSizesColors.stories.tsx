// stories/mui-inputs/button-group/GroupSizesColors.stories.tsx
import C from "@/components/mui-inputs/button-group/GroupSizesColors";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/button-group/GroupSizesColors",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GroupSizesColors: Story = {
  args: {},
};
