// stories/mui-x-date/date-calendar/DateCalendarViews.stories.tsx
import C from "@/components/mui-x-date/date-calendar/DateCalendarViews";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/DateCalendarViews",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DateCalendarViews: Story = {
  args: {},
};
