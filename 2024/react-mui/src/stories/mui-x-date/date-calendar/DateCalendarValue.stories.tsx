// stories/mui-x-date/date-calendar/DateCalendarValue.stories.tsx
import C from "@/components/mui-x-date/date-calendar/DateCalendarValue";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/DateCalendarValue",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DateCalendarValue: Story = {
  args: {},
};
