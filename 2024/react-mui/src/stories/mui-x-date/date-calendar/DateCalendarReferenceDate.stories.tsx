// stories/mui-x-date/date-calendar/DateCalendarReferenceDate.stories.tsx
import C from "@/components/mui-x-date/date-calendar/DateCalendarReferenceDate";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/DateCalendarReferenceDate",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DateCalendarReferenceDate: Story = {
  args: {},
};
