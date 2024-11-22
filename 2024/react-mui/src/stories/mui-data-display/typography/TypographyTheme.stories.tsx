// stories/mui-data-display/typography/TypographyTheme.stories.tsx
import C from "@/components/mui-data-display/typography/TypographyTheme";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-data-display/typography/TypographyTheme",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const TypographyTheme: Story = {
  args: {},
};
