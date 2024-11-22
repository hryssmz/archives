// stories/mui-inputs/autocomplete/FreeSoloCreateOptionDialog.stories.tsx
import C from "@/components/mui-inputs/autocomplete/FreeSoloCreateOptionDialog";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/FreeSoloCreateOptionDialog",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const FreeSoloCreateOptionDialog: Story = {
  args: {},
};
