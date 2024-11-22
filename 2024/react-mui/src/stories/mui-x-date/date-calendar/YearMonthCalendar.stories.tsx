// stories/mui-x-date/date-calendar/YearMonthCalendar.stories.tsx
import C from "@/components/mui-x-date/date-calendar/YearMonthCalendar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/YearMonthCalendar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const YearMonthCalendar: Story = {
  args: {},
};
