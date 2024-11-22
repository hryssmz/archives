// stories/mui-x-date/date-calendar/DateCalendarFormProps.stories.tsx
import C from "@/components/mui-x-date/date-calendar/DateCalendarFormProps";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/DateCalendarFormProps",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const DateCalendarFormProps: Story = {
  args: {},
};
