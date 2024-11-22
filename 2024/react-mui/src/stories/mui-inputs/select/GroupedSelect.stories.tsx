// stories/mui-inputs/select/GroupedSelect.stories.tsx
import C from "@/components/mui-inputs/select/GroupedSelect";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/select/GroupedSelect",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GroupedSelect: Story = {
  args: {},
};
