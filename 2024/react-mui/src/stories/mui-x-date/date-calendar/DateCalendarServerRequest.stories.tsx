// stories/mui-x-date/date-calendar/DateCalendarServerRequest.stories.tsx
import C from "@/components/mui-x-date/date-calendar/DateCalendarServerRequest";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/DateCalendarServerRequest",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DateCalendarServerRequest: Story = {
  args: {},
};
