// stories/mui-inputs/autocomplete/GitHubLabel.stories.tsx
import C from "@/components/mui-inputs/autocomplete/GitHubLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/GitHubLabel",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const GitHubLabel: Story = {
  args: {},
};
