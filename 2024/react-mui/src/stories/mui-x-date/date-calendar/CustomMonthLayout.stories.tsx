// stories/mui-x-date/date-calendar/CustomMonthLayout.stories.tsx
import C from "@/components/mui-x-date/date-calendar/CustomMonthLayout";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/CustomMonthLayout",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const CustomMonthLayout: Story = {
  args: {},
};
