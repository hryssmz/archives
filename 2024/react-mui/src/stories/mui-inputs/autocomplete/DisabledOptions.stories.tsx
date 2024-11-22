// stories/mui-inputs/autocomplete/DisabledOptions.stories.tsx
import C from "@/components/mui-inputs/autocomplete/DisabledOptions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-inputs/autocomplete/DisabledOptions",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DisabledOptions: Story = {
  args: {},
};
