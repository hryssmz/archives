// stories/mui-system/sx-prop/Example.stories.tsx
import C from "@/components/mui-system/sx-prop/Example";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-system/sx-prop/Example",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const Example: Story = {
  args: {},
};
