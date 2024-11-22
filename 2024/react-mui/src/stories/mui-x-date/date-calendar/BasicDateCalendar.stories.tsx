// stories/mui-x-date/date-calendar/BasicDateCalendar.stories.tsx
import C from "@/components/mui-x-date/date-calendar/BasicDateCalendar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/BasicDateCalendar",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const BasicDateCalendar: Story = {
  args: {},
};
