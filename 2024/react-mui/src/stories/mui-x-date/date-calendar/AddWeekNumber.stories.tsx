// stories/mui-x-date/date-calendar/AddWeekNumber.stories.tsx
import C from "@/components/mui-x-date/date-calendar/AddWeekNumber";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof C> = {
  title: "mui-x-date/date-calendar/AddWeekNumber",
  component: C,
};

export default meta;

type Story = StoryObj<typeof C>;

export const AddWeekNumber: Story = {
  args: {},
};
