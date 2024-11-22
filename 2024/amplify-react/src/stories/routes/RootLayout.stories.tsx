// stories/routes/RootLayout.stories.tsx
import RootLayout from "@/routes/RootLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RootLayout> = {
  title: "routes/RootLayout",
  component: RootLayout,
};

export default meta;

type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {
  args: {},
};
